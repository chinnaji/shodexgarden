import clientPromise from "../../lib/mongodb";
var md5 = require("md5");

export default async function handler(req, res) {
  const a = 1;
  // console.log(md5('message'));

  // try {
  //   var hashedTicketId = md5(new Date().toISOString().slice(0, 19));

  //   // async function saveToDb() {
  //   const client = await clientPromise;
  //   const db = client.db("shodexGarden");
  //   // const data = await db.collection("shodexGardenOrders").find({}).toArray();

  //   const orderDetails = {
  //     id: new Date().toISOString().slice(0, 19),
  //     ticketId: hashedTicketId,
  //     datePurchased: new Date().toISOString(),
  //     isValid: true,
  //     orderItems: ["apple", "orange", "mango"],
  //     total: "10000",
  //     customerDetails: ["apple", "orange", "mango"],
  //   };
  //   await db.collection("shodexGardenOrders").insertOne(orderDetails);
  //   return res.json({
  //     message: "order added successfully",
  //     success: true,
  //   });
  // } catch (error) {
  //   // return an error
  //   return res.json({
  //     message: new Error(error).message,
  //     success: false,
  //   });
  // }
  return res.json({
    message: process.env.NULI,
    success: true,
  });
}
