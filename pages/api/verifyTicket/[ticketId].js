import clientPromise from "../../../lib/mongodb";
var md5 = require("md5");
import { getSession } from "next-auth/react";

export default async function verifyTickets(req, res) {
  const session = await getSession({ req });

  if (req.method === "POST" && session) {
    try {
      const { ticketId } = req.query;
      // hash ticket id
      var hashedTicketId = md5(ticketId);

      const client = await clientPromise;
      const db = client.db(process.env.DB_NAME);
      // fetch the orders
      const data = await db
        .collection(process.env.ORDERS_COLLECTION)
        .findOne({ ticketId: hashedTicketId });
      // .toArray();

      // const tickets = JSON.parse(JSON.stringify(data));
      //   res.status(200).json({
      //     message: data,
      //     success: true,
      //   });
      if (data === null) {
        res.status(400).json("not found");
      } else {
        res.status(200).json({
          message: data,
          success: true,
        });
      }
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
