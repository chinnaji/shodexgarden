const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function getAllTickets(req, res) {
  let { db } = await connectToDatabase();
  // fetch the posts
  var tickets = await db
    .collection("shodexGardenTickets")
    .find({})
    // .sort({ published: -1 })
    .toArray();
  res.status(200).json(tickets);
}
