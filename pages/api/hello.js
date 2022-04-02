var md5 = require("md5");

export default function handler(req, res) {
  // console.log(md5('message'));
  var ab = md5("message");

  res.status(200).json({ a: req.body, b: ab });
}
