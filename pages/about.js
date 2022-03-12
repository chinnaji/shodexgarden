import React from "react";
import landscapeImg from "../images/landscaping.jpg";
import treeImg from "../images/tree.png";
import Image from "next/image";

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
      <h1 className="text-lime-500 text-center font-semibold text-4xl my-16">
        About Us{" "}
      </h1>
      <section className="max-w-[900px] text-center mx-auto">
        <h2 className="text-zinc-800 text-center font-semibold text-4xl mt-16 mb-5">
          We create comfortable spaces in which you can find adequate fun and
          joy
        </h2>
        <p className="lg:px-32">
          We work with a select group of landscape contractors, water feature
          and lighting design specialists to ensure the garden design process,
          from initial concept to project completion, is smooth and seamless.
        </p>
      </section>
      <section className="my-24 md:px-32">
        <h2 className="text-zinc-800 text-center font-semibold text-3xl mt-16 md:mb-10">
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
            <div className="bg-white py-10  w-full md:w-1/2 flex items-center justify-center p-10">
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
