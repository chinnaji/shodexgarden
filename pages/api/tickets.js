import clientPromise from "../../lib/mongodb";

export default async function getAllTickets(req, res) {
  const client = await clientPromise;
  const db = client.db("shodexGarden");
  // fetch the posts
  const data = await db.collection("shodexGardenTickets").find({}).toArray();

  const tickets = JSON.parse(JSON.stringify(data));
  res.status(200).json(tickets);
}
