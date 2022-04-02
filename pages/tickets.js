import React, { useState, useEffect } from "react";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import TicketsListing from "../components/TicketsListing";
import clientPromise from "../lib/mongodb";

function tickets({ ticketsFromDb }) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    // axios.get("/api/tickets").then((res) => setTickets(res.data));
    // console.log(ticketsFromDb);
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

// export async function getStaticProps() {
export async function getStaticProps() {
  // const res = await fetch(
  //   process.env.NODE_ENV == "development"
  //     ? "http://localhost:3000/api/tickets"
  //     : "https://shodexgarden.vercel.app/api/tickets"
  // );
  // const tickets = await res.json();

  // const ticketsFromDb = JSON.parse(JSON.stringify(tickets));

  const client = await clientPromise;
  const db = client.db("shodexGarden");
  // fetch the posts
  const data = await db.collection("shodexGardenTickets").find({}).toArray();
  const ticketsFromDb = JSON.parse(JSON.stringify(data));

  return {
    props: {
      ticketsFromDb,
    },
  };
}

export default tickets;
