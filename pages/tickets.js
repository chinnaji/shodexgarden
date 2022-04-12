import React, { useState, useEffect } from "react";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import TicketsListing from "../components/TicketsListing";
import clientPromise from "../lib/mongodb";
import Head from "next/head";

function tickets({ ticketsFromDb }) {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    // axios.get("/api/tickets").then((res) => setTickets(res.data));
    // console.log(ticketsFromDb);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Buy Tickets</title>
        <meta name="description" content="Buy tickets to see Shodex Garden" />
        <meta
          name="keywords"
          content="shodex,tickets, shodex garden tickets,shodex garden,gardens in lagos,parks in lagos"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shodexgarden.com/tickets" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - Shodex Garden " />
        <meta
          property="og:description"
          content="Buy tickets to see Shodex Garden"
        />
        <meta property="og:url" content="https://shodexgarden.com/tickets" />
        <meta property="og:site_name" content="Shodex Garden" />
        <meta
          property="og:image"
          content="https://shodexgarden.com/wp-content/uploads/2021/06/shodex_garden-8.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="10 minutes" />
      </Head>
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
  const db = client.db(process.env.DB_NAME);
  // fetch the posts
  const data = await db
    .collection(process.env.TICKETS_COLLECTION)
    .find({})
    .toArray();
  const ticketsFromDb = JSON.parse(JSON.stringify(data));

  return {
    props: {
      ticketsFromDb,
    },
    revalidate: 1,
  };
}

export default tickets;
