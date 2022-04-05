import React from "react";
import AdminPage from "../../components/AdminPage";
import clientPromise from "../../lib/mongodb";

function index({ orders }) {
  return (
    <>
      <AdminPage orders={orders} />
    </>
  );
}

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  // fetch the posts
  const data = await db
    .collection(process.env.ORDERS_COLLECTION)
    .find({})
    .toArray();
  const orders = JSON.parse(JSON.stringify(data));

  return {
    props: {
      orders,
    },
    revalidate: 10, // In seconds
  };
}

export default index;
