import React, { useState } from "react";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import TicketsListing from "../components/TicketsListing";
import ticketImage1 from "../images/tickets (1).jpg";
import ticketImage2 from "../images/tickets (2).jpg";
import ticketImage3 from "../images/tickets (3).jpg";
import ticketImage4 from "../images/tickets (4).jpg";
function tickets() {
  const ticketItems = [
    {
      id: "01",
      title: "Swimming Ticket (Adults)",
      image: ticketImage2,
      price: "3500",
      quantity: 1,
    },
    {
      id: "02",
      title: "Swimming Ticket (Kids)",
      image: ticketImage1,
      price: "1200",
      quantity: 1,
    },
    {
      id: "03",
      title: "Garden Area Ticket (Adults)",
      image: ticketImage3,
      price: "2500",
      quantity: 1,
    },
    {
      id: "04",
      title: "Garden Area Ticket (Kids)",
      image: ticketImage4,
      price: "1500",
      quantity: 1,
    },
  ];

  return (
    <>
      <main>
        <TicketsListing ticketItems={ticketItems} />
      </main>
      <GoogleMap />
    </>
  );
}

export default tickets;
