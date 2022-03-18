import React from "react";
import Image from "next/image";
import Link from "next/link";
import popularAattraction1 from "../../images/pool.svg";
import popularAattraction2 from "../../images/arcadegame.svg";
import popularAattraction3 from "../../images/monkey.svg";
import { GiFlowerEmblem } from "react-icons/gi";

function PopularAattractions() {
  const popularAattractions = [
    {
      title: "Swimming Pool",
      image: popularAattraction1,
      text: "Swim with joy as our pool is the best in the area.",
    },
    {
      title: "Game Houses",
      image: popularAattraction2,
      text: "The arcade features a great selection of machines to play.",
    },
    {
      title: "Mini Zoo",
      image: popularAattraction3,
      text: "We’ve got a zoo filled with all sorts of amazing animals.",
    },
  ];

  return (
    <section className="mt-32 w-full text-grey-500">
      <h2 className="text-lime-500 text-center font-semibold text-4xl mt-16 mb-10">
        Popular Attractions
      </h2>

      <div className="flex flex-wrap justify-center my-5">
        {popularAattractions.map((popularAattraction) => (
          <div
            className="w-full md:my-2 my-10 lg:w-1/3 md:p-10 p-4 text-center"
            key={popularAattraction.title}
          >
            {/* <div className=""> */}
            <div className="w-64 h-52 relative mx-auto ">
              <Image
                src={popularAattraction.image}
                layout="fill"
                alt="popular attractions"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mt-6 mb-2 text-zinc-800">
                {popularAattraction.title}
              </h3>
              <p className="text-base text-zinc-700">
                {popularAattraction.text}
              </p>
            </div>
            {/* </div> */}
          </div>
        ))}

        {/* <GiFlowerEmblem className="absolute right-10 animate-spin	 duration-700 ease-in-out	 text-3xl text-lime-600" /> */}
      </div>
    </section>
  );
}

export default PopularAattractions;
