import React, { useState, useEffect } from "react";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import TicketsListing from "../components/TicketsListing";

import axios from "axios";
function tickets() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios.get("/api/tickets").then((res) => setTickets(res.data));
  }, []);

  return (
    <>
      <main>
        <TicketsListing ticketItems={tickets} />
      </main>
      <GoogleMap />
    </>
  );
}

export default tickets;
