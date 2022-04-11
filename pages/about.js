import React from "react";
import landscapeImg from "../images/landscaping.jpg";
import treeImg from "../images/tree.png";
import Image from "next/image";
import Head from "next/head";

function about() {
  const aboutItems = [
    {
      image: landscapeImg,
      title: "Why choose us?",
      description:
        "Our established systems allow us to deliver industry-leading lawn care and landscape solutions to commercial and residential clients. Built on a family tradition of caring, we are driven by a passion to exceed customer expectations and consistently deliver client satisfaction..",
    },
    {
      image: treeImg,
      title: "Our Mission?",
      description:
        "Our aim is to reflect as closely as possible the styling, decoration and colour palette of the client’s home so that there is a strong visual relationship between the inside and outside spaces.We regularly work closely with architects and interior designers to ensure that this is achieved.",
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto my-5 mb-24  px-3">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>About Shodex Garden </title>
        <meta
          name="description"
          content="Shodex Gardens has a park, event center and a mini-zoo where friends and family can spend quality time together.

          It is one of the fun places to visit in Lagos."
        />
        <meta
          name="keywords"
          content="shodex,about shodex garden,shodex garden,gardens in lagos,parks in lagos"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shodexgarden.com/about" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us - Shodex Garden " />
        <meta
          property="og:description"
          content="Shodex Garden Is A Well Landscaped Park and Garden With The Perfect Ambience For Events & Hangouts. It is located at 251/253 Ikorodu Rd, Ilupeju 101233, Lagos."
        />
        <meta property="og:url" content="https://shodexgarden.com/about" />
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
        About Us{" "}
      </h1>
      <section className="max-w-[700px] text-center mx-auto">
        <h2 className="text-zinc-800 text-center font-semibold text-2xl mt-16 mb-5">
          We create comfortable spaces in which you can find adequate fun and
          joy
        </h2>
        <p className="lg:px-18">
          We work with a select group of landscape contractors, water feature
          and lighting design specialists to ensure the garden design process,
          from initial concept to project completion, is smooth and seamless.
        </p>
      </section>
      <section className="my-24 md:px-32">
        <h2 className="text-zinc-800 text-center font-semibold text-2xl mt-16 md:mb-10">
          Our Humble Achievements!
        </h2>
        <div className="flex flex-wrap">
          <div className="text-lime-500 w-full md:w-1/3 text-center md:my-0 my-10">
            <h3 className="text-3xl mb-1 font-semibold">40,000 +</h3>
            <p>Happy Clients</p>
          </div>
          <div className="text-lime-500 w-full md:w-1/3 text-center md:my-0 my-10">
            <h3 className="text-3xl mb-1 font-semibold">1,000 +</h3>
            <p>Trees Planted</p>
          </div>
          <div className="text-lime-500 w-full md:w-1/3 text-center md:my-0 my-10">
            <h3 className="text-3xl mb-1 font-semibold">100 +</h3>
            <p>Awards</p>
          </div>
        </div>
      </section>

      {aboutItems.map(
        (aboutItem, index) => (
          <section
            className={`flex flex-wrap md:my-0 my-10 ${
              index === 1 ? "md:flex-row-reverse" : ""
            }`}
            key={aboutItem.title}
          >
            <div className="bg-white py-10  md:order-first order-last w-full md:w-1/2 flex items-center justify-center p-10">
              <div className="text-center">
                <h2 className="text-lime-500 text-3xl text-medium">
                  {aboutItem.title}
                </h2>
                <p className="mt-3 mb-6 text-base">{aboutItem.description}</p>
              </div>
            </div>

            <div className="w-full md:h-[500px] h-[300px] md:w-1/2 relative">
              {" "}
              <Image
                src={aboutItem.image}
                layout="fill"
                objectFit="cover"
                alt={`shodex garden services - ${aboutItem.title}`}
              />
            </div>
          </section>
        ),
        []
      )}
    </main>
  );
}

export default about;
