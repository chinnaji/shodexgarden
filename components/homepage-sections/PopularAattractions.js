import React from "react";
import Image from "next/image";
import Link from "next/link";
import popularAattraction1 from "../../images/pool.svg";
import popularAattraction2 from "../../images/arcadegame.svg";
import popularAattraction3 from "../../images/monkey.svg";

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
      <h2 className="text-lime-500 text-center font-semibold text-4xl mb-16">
        Popular Attractions
      </h2>

      <div className="flex flex-wrap justify-center my-5">
        {popularAattractions.map((popularAattraction) => (
          <div
            className="w-full  lg:w-1/3 p-2 text-center"
            key={popularAattraction.title}
          >
            {/* <div className=""> */}
            <div className="w-64 h-52 relative mx-auto ">
              <Image src={popularAattraction.image} layout="fill" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mt-6 mb-2">
                {popularAattraction.title}
              </h3>
              <p className="text-base">{popularAattraction.text}</p>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularAattractions;
