import React from "react";
import landscapingImg from "../../images/landscaping.jpg";
import gardeningImg from "../../images/gardening.jpg";
import eventsImg from "../../images/events.jpg";
import lagosImg from "../../images/lagos.jpg";
import Image from "next/image";
import Link from "next/link";
import GetQuote from "../../components/GetQuote";
import Head from "next/head";

function services() {
  const services = [
    {
      title: "Landscaping",
      description:
        "Plants are expensive and need to be looked after. For clients who have used any of our services, we can offer on-going advice on design, styling and planting.",
      link: "/services/landscaping",
      image: landscapingImg,
    },
    {
      title: "Gardening",
      description:
        "At Shodex Garden, we take a cooperative approach, developing the design concept together with our clients, tailoring the service according to their taste, needs and budget.",
      link: "/services/gardening",
      image: gardeningImg,
    },
    {
      title: "Events",
      description:
        "Plants are expensive and need to be looked after. For clients who have used any of our services, we can offer on-going advice on design, styling and planting.",
      link: "/services/events",
      image: eventsImg,
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto my-5 mb-24  px-3">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title> Shodex Garden Services </title>
        <meta
          name="description"
          content="we offer our best in landscaping, event hosting and beautiful garden designs"
        />
        <meta
          name="keywords"
          content="shodex, shodex garden service,shodex garden,gardens in lagos,parks in lagos,landscaping, event hosting, best events centers in lagos, event centers "
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shodexgarden.com/services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services - Shodex Garden " />
        <meta
          property="og:description"
          content="we offer our best in landscaping, event hosting and beautiful garden designs"
        />
        <meta property="og:url" content="https://shodexgarden.com/services" />
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
        Our Services
      </h1>

      {services.map((service, index) => (
        <section
          className={`flex flex-wrap ${
            index === 1 ? "md:flex-row-reverse my-10 md:my-0" : ""
          }`}
          key={service.title}
        >
          <div className="md:order-1 order-last bg-white py-10  w-full md:w-1/2 flex items-center justify-center p-10">
            <div className="text-center">
              <h2 className="text-lime-500 text-3xl text-medium">
                {service.title}
              </h2>
              <p className="mt-3 mb-6 text-base">{service.description}</p>
              <Link href={service.link} passHref>
                <button className="rounded-md px-10 border-2 bg-transparent hover:bg-lime-500 transition-all ease-in-out delay-75 hover:text-white border-lime-500 mt-7 py-1">
                  More
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:h-[500px] h-[300px] md:w-1/2 relative">
            {" "}
            <Image
              src={service.image}
              layout="fill"
              objectFit="cover"
              alt={`picture showing shodex garden services - ${service.title}`}
              // placeholder="blur"
            />
          </div>
        </section>
      ))}

      <GetQuote image={lagosImg} />
    </main>
  );
}

export default services;
