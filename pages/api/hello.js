import clientPromise from "../../lib/mongodb";
const nodemailer = require("nodemailer");
var QRCode = require("qrcode");

export default async function handler(req, res) {
  async function sendEmail(verifyPaymentResponse) {
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
        rejectUnauthorized: true, //set to true in production
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
      html: `<h1>hello</h1>`,
    });
    const nodeMailerResponse = await info.messageId;
    // info.bbb = info.messageId;
    console.log("Message sent: %s", nodeMailerResponse);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  return res.json({
    message: process.env.NULI,
    success: true,
  });
}
