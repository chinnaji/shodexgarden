import React from "react";
import landscapingImg from "../../images/landscaping.jpg";
import gardeningImg from "../../images/gardening.jpg";
import eventsImg from "../../images/events.jpg";
import lagosImg from "../../images/lagos.jpg";
import Image from "next/image";
import Link from "next/link";
import GetQuote from "../../components/getQuote";
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
      <h1 className="text-lime-500 text-center font-semibold text-4xl my-16">
        Our Services
      </h1>

      {services.map((service, index) => (
        <section
          className={`flex flex-wrap ${
            index === 1 ? "md:flex-row-reverse" : ""
          }`}
          key={service.title}
        >
          <div className="bg-white py-10  w-full md:w-1/2 flex items-center justify-center p-10">
            <div className="text-center">
              <h2 className="text-lime-500 text-3xl text-medium">
                {service.title}
              </h2>
              <p className="mt-3 mb-6 text-base">{service.description}</p>
              <Link href={service.link} passHref>
                <button className="rounded-full border-2 bg-transparent hover:bg-lime-500 transition-all ease-in-out delay-75 hover:text-white border-lime-500 px-8 py-1">
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
