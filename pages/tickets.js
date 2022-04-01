import React, { useState, useEffect } from "react";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import TicketsListing from "../components/TicketsListing";

import axios from "axios";
function tickets({ ticketsFromDb }) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    // axios.get("/api/tickets").then((res) => setTickets(res.data));
    console.log(ticketsFromDb);
  }, []);

  return (
    <>
      <main>
        <TicketsListing ticketItems={ticketsFromDb} />
      </main>
      <GoogleMap />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    (process.env.NODE_ENV = "development"
      ? "http://localhost:3000/api/tickets"
      : "https://shodexgarden.vercel.app/api/tickets")
  );
  const ticketsFromDb = await res.json();
  return {
    props: {
      ticketsFromDb,
    },
  };
}

export default tickets;
