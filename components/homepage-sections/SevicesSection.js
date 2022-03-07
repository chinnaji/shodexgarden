import React from "react";
import Image from "next/image";
import Link from "next/link";
import service1 from "../../images/landscaping.jpg";
import service2 from "../../images/gardening.jpg";
import service3 from "../../images/events.jpg";
import { BsArrowRightShort } from "react-icons/bs";
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
    <section className="mt-32 w-full text-grey-500">
      <h2 className="text-lime-500 text-center font-semibold text-4xl mb-32">
        Our Services
      </h2>

      <div className="flex flex-wrap justify-center my-5 relative">
        {services.map((service, index) => (
          <div
            className={`w-full h-[400px] lg:w-1/3 p-2 text-center relative ${
              index === 1 ? "lg:mt-[-70px]" : ""
            }`}
            key={service.title}
          >
            {/* <div className=""> */}

            <div className="max-w-xs h-full  relative mx-auto shadow-lg rounded-lg ">
              <Image
                src={service.image}
                layout="fill"
                objectFit="cover"
                alt="shodex garden services"
                className="rounded-lg"
              />

              <div className="  rounded-lg absolute flex pb-12 px-8 flex-col justify-end inset-0 bg-[#00000080] z-40 text-center text-white ">
                <h3 className="  font-bold text-3xl mt-6 mb-2">
                  {service.title}
                </h3>
                <p className="  text-base">{service.text}</p>

                <div className="absolute right-[-20px] top-20  w-14 hover:cursor-pointer h-14 bg-lime-500 flex items-center justify-center text-white rounded-full text-lg mx-auto mt-3">
                  <Link href={`/services/${service.title.toLocaleLowerCase()}`}>
                    <BsArrowRightShort className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="mx-auto hover:bg-lime-600 ease-in-out duration-300 bg-lime-500 py-4  mt-8 px-14  rounded lg:text-sm font-bold text-zinc-50">
          <Link href="/services">See More</Link>
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
