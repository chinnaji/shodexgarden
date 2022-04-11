import React from "react";
import Image from "next/image";
import ig1 from "../../images/ig/img (1).jpg";
import ig6 from "../../images/ig/img (2).jpg";
import ig4 from "../../images/ig/img (3).jpg";
import ig5 from "../../images/ig/img (4).jpg";
import ig3 from "../../images/ig/img (5).jpg";
import ig2 from "../../images/ig/img (6).jpg";
import ig7 from "../../images/ig/img (7).jpg";
import ig8 from "../../images/ig/img (8).jpg";
import GetQuote from "../../components/GetQuote";
import Link from "next/link";
import Head from "next/head";

function events() {
  const images = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8];

  return (
    <main className="max-w-[1200px] mx-auto my-5 mb-24  px-3">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title> Shodex Garden Services - Events </title>
        <meta
          name="description"
          content="we offer our best spaces for event hosting"
        />
        <meta
          name="keywords"
          content="shodex, shodex garden service,shodex garden,gardens in lagos,parks in lagos,landscaping, event hosting, best events centers in lagos, event centers "
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shodexgarden.com/services/events" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services - Shodex Garden " />
        <meta
          property="og:description"
          content="we offer our best spaces for event hosting "
        />
        <meta
          property="og:url"
          content="https://shodexgarden.com/services/events"
        />
        <meta property="og:site_name" content="Shodex Garden" />
        <meta
          property="og:image"
          content="https://shodexgarden.com/wp-content/uploads/2021/06/shodex_garden-8.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="10 minutes" />
      </Head>
      <h1 className="text-lime-500 text-center font-semibold text-4xl my-16">
        Events{" "}
      </h1>
      <h2 className="text-zinc-800 text-left font-semibold text-2xl mb-3 ">
        How We Can Help
      </h2>
      <p className="py-5">
        We provide an integrated approach to landscape development and
        maintenance that permits us to work with your architects and designers
        to give you results in no time. This approach leads to better,
        tailor-made estimating, assured budget, cost-effective solutions, and
        better integration of landscape into the overall project.
      </p>
      <p>
        We provide an integrated approach to landscape development and
        maintenance that permits us to work with your architects and designers
        to give you results in no time. This approach leads to better,
        tailor-made estimating, assured budget, cost-effective solutions, and
        better integration of landscape into the overall project.
      </p>

      <div>
        <h2 className="text-zinc-800 text-left font-semibold text-2xl mt-8 mb-3 ">
          What we offer
        </h2>

        <ul className="list-disc	">
          <li>Group Get-Together</li>
          <li>Parties</li>
          <li>Excursions</li>
          <li>Private Events</li>
        </ul>
      </div>

      <h2 className="text-lime-500 text-left font-semibold text-3xl mb-10 mt-16">
        Our Works
      </h2>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div
            className={`p-2 w-full sm:w-1/2 md:w-1/2 xl:w-1/4  h-52`}
            key={index}
          >
            <div className="w-full h-full   relative mx-auto ">
              <Image
                className=" shadow-lg rounded-md"
                src={image}
                layout="fill"
                objectFit="cover"
                alt="shodex garden events projects "
                placeholder="blur"
              />
            </div>
          </div>
        ))}

        <p className="my-10">
          <Link href="/services/gardening" passHref>
            <span className="cursor-pointer">
              -- Our Services - <span className="text-lime-500">Gardening</span>
            </span>
          </Link>
        </p>
      </div>

      <GetQuote image={ig4} />
    </main>
  );
}

export default events;
