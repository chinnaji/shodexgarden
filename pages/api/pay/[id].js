const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  const nodemailer = require("nodemailer");
  var QRCode = require("qrcode");

  if (req.method === "POST") {
    var total = 0;
    const { id } = req.query;
    const ticketId = Math.random().toString(36).slice(2);
    var cleanCart;

    const [cart, customerDetails] = req.body;
    const { reference, email, metadata } = customerDetails;

    // send order data to backend
    function saveToDb() {
      const orderDetails = [
        {
          id: new Date().toISOString().slice(0, 19),
          ticketId: ticketId,
          datePurchased: new Date().toISOString(),
          isValid: true,
          orderItems: cleanCart,
          total: total,
          customerDetails: [email, reference, metadata],
        },
      ];
      console.log(orderDetails);
      // return orderDetails;
    }

    // send email if payment is verified
    async function sendEmail(verifyPaymentResponse) {
      var bbb;
      // generate qrcode image
      let img = await QRCode.toDataURL(ticketId);

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "mail.androidpill.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "test@androidpill.com",
          pass: "#t})Katv3OoO",
        },
        tls: {
          rejectUnauthorized: false, //set to true in production
        },
      });

      // send mail with defined transport object
      let info = transporter.sendMail({
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
          `
          <h1 style="text-transform:capitalize;">Dear ${
            customerDetails.metadata.name
          }</h1> 
          </br></hr> 
          <p style="margin-bottom:20px;">Your ticket purchase hase been successfully confirmed✅. Kindly provide the QRcode below at the entrance gate. </br></hr> Love from Shodex Garden❤. </p>
      <h3 style="margin-bottom:20px;>Order Summary</h3>    
  <table style="font-size:12px;margin:10px auto;font-family: arial, sans-serif;border: 1px solid #dddddd;">
  <thead >
  <tr>
  <th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Item</th>
  <th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Price</th>
  <th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Quantity</th>
</tr>
</thead>

<tbody>
${cleanCart.map(
  (row) =>
    `<tr>
     <td style='border-bottom: 1px solid #dddddd;padding: 15px;'>
    ${row.title}
    </td>
    <td style='border-bottom: 1px solid #dddddd;padding: 15px;'>
    #${Intl.NumberFormat("en-US").format(row.price)}
    </td> 
    <td style='border-bottom: 1px solid #dddddd;padding: 15px;'>
    X 
    ${row.quantity} 
    </td> 
    </tr>`
)}
</tbody>
</table>   

<h3 style="text-transform:capitalize;border: 1px solid #dddddd;padding: 15px;text-align-center;">TOTAL - &#8358;${Intl.NumberFormat(
            "en-US"
          ).format(total)}</h3> 

          <img style="width:300px;height:300px;" src="` +
          img +
          '">  </br></hr> ', // html body
      });
      info.bbb = info.messageId;
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      //
      saveToDb();
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      return res.status(200).json({ tobeposted: saveToDb() });
    }

    const verifyPayment = async () => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer sk_test_cfada6b3ffa1b736a47a898c0df8d7a39a5ee7b1"
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
        saveToDb(verifyPaymentResponse);
        sendEmail(verifyPaymentResponse);
        console.log("verified");
      } else {
        // return res.status(400).json("error, contact support ");
        console.log("not verified");
      }
    };

    // fetch tickets from database
    async function getTickets() {
      let { db } = await connectToDatabase();
      // fetch the tickets
      var tickets1 = await db
        .collection("shodexGardenTickets")
        .find({})
        // .sort({ published: -1 })
        .toArray();
      // return the tickets
      return tickets1;
    }

    const validateCart = async () => {
      var tickets = await getTickets();
      // return the tickets

      // fetch the tickets
      var tickets = [
        {
          _id: "6231d75cb0ef997f3dc068e3",
          title: "Swimming Ticket (Adults)",
          image: "/images/tickets (2).jpg",
          price: "3500",
          quantity: 1,
          id: "62469776fd8a058ae14c2053",
        },
        {
          _id: "6231d7f6b0ef997f3dc068e4",
          title: "Swimming Ticket (Kids)",
          image: "/images/tickets (1).jpg",
          price: "1200",
          quantity: 1,
          id: "624697e7fd8a058ae14c2057",
        },
        {
          _id: "6231d82cb0ef997f3dc068e5",
          title: "Garden Area Ticket (Adults)",
          image: "/images/tickets (3).jpg",
          price: "2500",
          quantity: 1,
          id: "6246981bfd8a058ae14c2059",
        },
        {
          _id: "6231d850b0ef997f3dc068e6",
          title: "Garden Area Ticket (Kids)",
          image: "/images/tickets (4).jpg",
          price: "1500",
          quantity: 1,
          id: "624697fdfd8a058ae14c2058",
        },
      ];
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
      verifyPayment();

      // console.log(tickets);
      // console.log(filteredTicketsFromDb);
      // console.log(total);
      //   return { ftfdb: filteredTicketsFromDb, t: total, fc: filteredCart };
    };

    validateCart();
    // console.log(cart);
    // console.log("-----");
    // console.log(customerDetails);
  } else {
    // Handle any other HTTP method
  }
}
