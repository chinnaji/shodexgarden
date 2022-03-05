import React from "react";
import Image from "next/image";
import Link from "next/link";
import service1 from "../../images/landscaping.jpg";
import service2 from "../../images/gardening.jpg";
import service3 from "../../images/events.jpg";

function ServicesSection() {
  const services = [
    {
      title: "Landscaping",
      image: service1,
      text: "Swim with joy as our pool is the best in the area.",
    },
    {
      title: "Gardens",
      image: service2,
      text: "The arcade features a great selection of machines to play.",
    },
    {
      title: "Events",
      image: service3,
      text: "We’ve got a zoo filled with all sorts of amazing animals.",
    },
  ];

  return (
    <section className="my-6 w-full text-grey-500">
      <h2 className="text-lime-500 text-center font-semibold text-3xl mb-3">
        Our Services
      </h2>

      <div className="flex flex-wrap justify-center my-5">
        {services.map((service) => (
          <div className="w-full  lg:w-1/3 p-2 text-center" key={service.title}>
            {/* <div className=""> */}
            <div className="w-64 h-52 relative mx-auto shadow-lg rounded-full">
              <Image src={service.image} layout="fill" objectFit="cover" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mt-6 mb-2">
                {service.title}
              </h3>
              <p className="text-base">{service.text}</p>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="mx-auto hover:bg-lime-600 ease-in-out duration-300 bg-lime-500 py-3  mt-6 px-6  rounded lg:text-sm font-bold text-zinc-50">
          <Link href="/services">See More</Link>
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
