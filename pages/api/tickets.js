export default function getAllTickets(req, res) {
  res.status(200).json([
    {
      id: "01",
      title: "Swimming Ticket (Adults)",
      image: "/images/tickets (2).jpg",
      price: "3500",
      quantity: 1,
    },
    {
      id: "02",
      title: "Swimming Ticket (Kids)",
      image: "/images/tickets (1).jpg",
      price: "1200",
      quantity: 1,
    },
    {
      id: "03",
      title: "Garden Area Ticket (Adults)",
      image: "/images/tickets (3).jpg",
      price: "2500",
      quantity: 1,
    },
    {
      id: "04",
      title: "Garden Area Ticket (Kids)",
      image: "/images/tickets (4).jpg",
      price: "1500",
      quantity: 1,
    },
  ]);
}
