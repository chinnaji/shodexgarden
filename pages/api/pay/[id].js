import clientPromise from "../../../lib/mongodb";
var md5 = require("md5");

export default async function handler(req, res) {
  const nodemailer = require("nodemailer");
  var QRCode = require("qrcode");

  if (req.method === "POST") {
    // cart total
    var total = 0;
    // request query
    const { id } = req.query;
    // generate ticket Id
    const ticketId = Math.random().toString(36).slice(2);
    // hash ticket is
    var hashedTicketId = md5(ticketId);
    // after cart has been assessed and verified
    var cleanCart;
    // destructure request body
    const [cart, customerDetails] = req.body;
    // destructure customer details from request body
    const { reference, email, metadata } = customerDetails;
    // final response tracking success and errors of all function to be returned
    const fullResponse = [];

    // send order data to backend
    async function saveToDb(isEmailSent) {
      try {
        // connecting to db
        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);
        // assemble order informations
        const orderDetails = {
          ticketId: hashedTicketId, //hashed ticket id
          datePurchased: new Date().toISOString(), //date of purchase
          isValid: true, //is ticket valid
          orderItems: cleanCart, //verified cart
          total: total, //verified cart total
          customerDetails: { email, reference, metadata }, //customer details
          isEmailSent, //check if email has been sent
          usedOn: "0", //date ticket was used
          orderNo: Math.floor(1000 + Math.random() * 9000),
        };
        // connect to db
        await db
          .collection(process.env.ORDERS_COLLECTION)
          .insertOne(orderDetails);
        // store info to final response
        fullResponse.push({
          message: "order successfull",
          success: true,
          // orderDetails,
          ticketId,
        });
        return res.json(fullResponse);
      } catch (error) {
        // return an error if it isnt saved to db
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }

      // return orderDetails;
    }

    // send email if payment is verified
    async function sendEmail(verifyPaymentResponse) {
      // generate qrcode image
      let img = await QRCode.toDataURL(ticketId);

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: parseInt(process.env.NODEMAILER_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
        tls: {
          rejectUnauthorized: false, //set to true in production
        },
      });

      let mailOptions = {
        from: '"Shodex Garden" <test@androidpill.com>', // sender address
        to: customerDetails.email, // list of receivers
        subject: "Shodex Garden - Ticket Purhase✔", // Subject line
        text: "Shodex Garden - Ticket Purhase?", // plain text body
        attachDataUrls: true, //to accept base64 content in messsage
        // attachments: [
        //   {
        //     // encoded string as an attachment
        //     filename: "ticket.png",
        //     content: img.split("base64,")[1],
        //     path: img,
        //     encoding: "base64",
        //   },
        // ],
        html:
          `<h1 style="text-transform:capitalize;">Dear ${
            customerDetails.metadata.name
          }</h1> 
          </br></hr> 
          <p style="margin-bottom:20px;">Your ticket purchase hase been successfully confirmed✅. Kindly provide the QRcode below👇 at the entrance gate. </br></hr> Love from Shodex Garden❤. </p>
      <h3 style="margin-bottom:40px;">Order Summary</h3>    
  <table style="font-size:12px;margin:10px auto;font-family: arial, sans-serif;border: 1px solid #dddddd;">
  <thead >
  <tr>
  <th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Item</th>
  <th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Price</th>
  <th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Quantity</th>
</tr>
</thead>

<tbody>
${cleanCart
  .map(
    (row) =>
      `
    <tr>
      <td style="border-bottom: 1px solid #dddddd;padding: 15px;">
        ${row.title}
      </td>
      <td style="border-bottom: 1px solid #dddddd;padding: 15px;">
        #${Intl.NumberFormat("en-US").format(row.price)}
      </td>
      <td style="border-bottom: 1px solid #dddddd;padding: 15px;">
        X ${row.quantity}
      </td>
    </tr>
    `
  )
  .join("")}
</tbody>
</table>   

<h3 style="text-transform:capitalize;border: 1px solid #dddddd;padding: 15px;text-align-center;">TOTAL PAID - &#8358;${Intl.NumberFormat(
            "en-US"
          ).format(total)}</h3> <img style="width:300px;height:300px;" src="` +
          img +
          '">  </br></hr> ',
      };
      // send mail with defined transport object
      // let info = transporter.sendMail(mailOptions);

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          // fullResponse.push({ nodemaileErr: error.reason.toString() });
          // console.log(error);
          saveToDb(error.reason.toString());
        } else {
          saveToDb("email sent");
          // fullResponse.push({ nodemaileErr: "success" });
        }
      });

      // console.log(transporter.options.host);
    }

    const verifyPayment = async () => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        process.env.SECRET_KEY
        // "Bearer sk_test_cfada6b3ffa1b736a47a898c0df8d7a39a5ee7b1"
      );
      myHeaders.append(
        "Cookie",
        "sails.sid=s%3A-8ecpSkPHCDLFVszHkd1EevmHHAUG7pS.%2F5Fm0JSQ3JsJ9m9suyvBsDLf%2B1rY2jFuGAxHQ0alABQ"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      var verifyPaymentResponse;

      let response = await fetch(
        `https://api.paystack.co/transaction/verify/${id}`,
        requestOptions
      );
      response = await response.json();

      verifyPaymentResponse = response;
      if (
        verifyPaymentResponse.data.status &&
        verifyPaymentResponse.data.amount == total * 100
      ) {
        // fullResponse.push("payment verified");
        sendEmail(verifyPaymentResponse);
        // saveToDb(verifyPaymentResponse);
      } else {
        return res.status(400).json("error, contact support ");
      }
    };

    // fetch tickets from database
    async function getTickets() {
      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME);
      // fetch the posts
      const data = await db
        .collection(process.env.TICKETS_COLLECTION)
        .find({})
        .toArray();
      const tickets1 = JSON.parse(JSON.stringify(data));
      // fullResponse.push({ tikfdb: tickets1 });

      return tickets1;
    }

    const validateCart = async () => {
      // fetch the tickets
      var tickets = await getTickets();
      // return the tickets

      // a place to store cart items after
      const filteredCart = [];

      // strip cartItems of price,title,image
      cart.map(
        (cartItem) => (
          delete cartItem.price,
          delete cartItem.title,
          delete cartItem.image,
          filteredCart.push(cartItem)
        )
      );
      // filter tickets from DB by items striped from cartitems
      const filteredTicketsFromDb = [];
      filteredCart.map((fc) =>
        filteredTicketsFromDb.push(
          ...tickets.filter((ticket) => ticket.id === fc.id)
        )
      );

      for (let i = 0; i < filteredTicketsFromDb.length; ++i) {
        var foundIndex = filteredTicketsFromDb.findIndex(
          (x) => x.id === cart[i].id
        );
        filteredTicketsFromDb[foundIndex].quantity = cart[foundIndex].quantity;
      }

      // get total price
      filteredTicketsFromDb.map((x) => (total += x.quantity * x.price));
      cleanCart = filteredTicketsFromDb;
      // call function to verify payment
      // fullResponse.push("cart verified");
      verifyPayment();
    };

    validateCart();
  } else {
    return res.status(400).json("path not found");
    // Handle any other HTTP method
  }
}
