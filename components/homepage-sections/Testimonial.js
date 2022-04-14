import React from "react";
import review1 from "../../images/review/review (1).png";
import review2 from "../../images/review/review (2).png";
import review3 from "../../images/review/review (3).png";
import Image from "next/image";

function Testimonial() {
  const testimonials = [
    {
      name: "Oghenovo Egodo M.",
      text: "Shodex Garden is an absolutely lovely place. If you’re a garden or park person or even just generally looking for a serene open space for a small get-together, Shodex is definitely your answer! The place is so big- it has a zoo, a pool, a mini eat-out, a bar, a playground for kids, and even space for an event. I love it.🙂					",
      image: review2,
    },
    {
      name: "Beatrice Achosim",
      text: "This place is a nice place for events, also the environment is an adventurous one to feed the eyes with, there's a zoo, an ice cream spot, a game center for adults and children, swimming pool, and nice backgrounds for great pictures, overall I recommend this place for group hangouts, meetings, and small events.					",
      image: review3,
    },

    {
      name: "Julie Esemuru",
      text: "It's not so big but every space is judiciously used. It is an entertainment place for both adults and children. Also has a swimming pool and a mini zoo.Good parking space and very easy to locate. Staff are courteous and the prices of things are very reasonable. I would recommend.					",
      image: review1,
    },
  ];
  return (
    <div className="2xl:container 2xl:mx-auto my-24 pt-10 ">
      <h2 className="text-lime-500 text-center font-semibold text-3xl ">
        Testimonials
      </h2>
      <p className="w-full mb-10 text-center">What people say about us</p>
      <div className="flex flex-wrap">
        {testimonials.map((testi) => (
          <div className="  w-full lg:w-1/3 p-4 ">
            <section className="bg-white shadow-lg flex relative  px-4 py-2 rounded-lg w-full ">
              <div>
                {/* <h1 className=" text-5xl text-center leading-5 font-semibold text-gray-800 ">
                "
              </h1> */}
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  {testi.text}
                </p>
                <div className="w-14 h-14 relative cursor-pointer block mx-auto  mt-5">
                  <Image
                    src={testi.image}
                    layout="fill"
                    alt="shodex garden logo"
                    priority
                    loading="eager"
                  />
                </div>
                <h3 className="text-center  font-semibold text-zinc-700 mb-3 mt-2">
                  {testi.name}
                </h3>
              </div>
            </section>
          </div>
        ))}

        {/* Support Grid Card */}
      </div>
    </div>
  );
}

export default Testimonial;
