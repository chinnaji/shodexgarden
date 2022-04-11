import React from "react";
import AdminPage from "../../components/AdminPage";
import clientPromise from "../../lib/mongodb";
import Head from "next/head";
import { getSession } from "next-auth/react";

function index({ orders }) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <title>Shodex Garden Admin</title>
      </Head>
      <AdminPage orders={orders} />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {
        orders: [],
      },
      // orders: [],
      // redirect: {
      //   destination: "/",
      //   permanent: false,
      // },
    };
  }

  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);
  // fetch the posts
  const data = await db
    .collection(process.env.ORDERS_COLLECTION)
    .find({})
    .toArray();
  const orders = JSON.parse(JSON.stringify(data.reverse()));

  return {
    props: {
      orders,
    },
    // revalidate: 1, // In seconds
  };
}
index.getLayout = function getLayout(page) {
  return <>{page}</>;
};
export default index;
