// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method === "POST") {
    const nodemailer = require("nodemailer");

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
      from: `"chi_nnaji.com" <${req.body.email}>`, // sender address
      to: "Shodexgardens2001@gmail.com", // list of receivers
      subject: req.body.message.slice(0, 10), // Subject line
      text: "Message from portfolio website", // plain text body

      html: `from <b>${req.body.name}</b>  <br/> <br/><b>${req.body.message}</b> <br/> <br/> <b>${req.body.phoneNumber}</b> <br/> <br/>  <b>${req.body.email}</b> `,
    };
    // send mail with defined transport object

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        console.log(info);
        return res.status(300).json({ success: false, error });
      } else {
        console.log("email sent");
        return res.status(200).json({ success: true, info });
      }
    });
  } else {
    return res.status(200).json({ response: "Invalid Route" });
  }

  // console.log(transporter.options.host);
}
