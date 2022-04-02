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
  res.status(200).json([
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
  ]);
}
