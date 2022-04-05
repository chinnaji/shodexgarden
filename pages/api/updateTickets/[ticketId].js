import clientPromise from "../../../lib/mongodb";

export default async function verifyTickets(req, res) {
  if (req.method === "PUT") {
    try {
      const { ticketId } = req.query;
      // hash ticket id

      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME);
      // fetch the posts
      const data = await db
        .collection(process.env.ORDERS_COLLECTION)
        .updateOne({ ticketId: ticketId }, { $set: { isValid: false } });

      res.status(200).json({
        message: data,
        success: true,
      });
    } catch (error) {
      //   return an error
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  } else {
    res.status(400).json("invalid route");
  }
}
