import clientPromise from "../../lib/mongodb";

export default async function getAllTickets(req, res) {
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);
    // fetch the posts
    const data = await db
      .collection(process.env.TICKETS_COLLECTION)
      .find({})
      .toArray();

    const tickets = JSON.parse(JSON.stringify(data));
    res.status(200).json(tickets);
  } else {
    res.status(200).json("invalid route");
  }
}
