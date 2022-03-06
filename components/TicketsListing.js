import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import ticketImage1 from "../images/tickets (1).jpg";
import ticketImage2 from "../images/tickets (2).jpg";
import ticketImage3 from "../images/tickets (3).jpg";
import ticketImage4 from "../images/tickets (4).jpg";
import Image from "next/image";

function TicketsListing() {
  const ticketItems = [
    {
      title: "Swimming Ticket (Adults)",
      image: ticketImage1,
      price: "3500",
    },
    {
      title: "Swimming Ticket (Kids)",
      image: ticketImage2,
      price: "1200",
    },
    {
      title: "Garden Area Ticket (Adults)",
      image: ticketImage3,
      price: "2500",
    },
    {
      title: "Garden Area Ticket (Kids)",
      image: ticketImage4,
      price: "1500",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto my-5  px-3 pt-16">
      <h2 className="text-lime-500 text-center font-semibold text-3xl mb-3">
        Book a Ticket, Come Enjoy Yourself!{" "}
      </h2>
      <div className="w-fit bg-lime-500 rounded-xl flex items-center px-3 text-white py-2 flex-row ml-4">
        <FiShoppingCart className="mx-2" />{" "}
        <span className="mr-2 font-semibold">Cart</span>
        <span className=" mx-2 w-7 h-7 flex items-center justify-center text-grey-500 bg-white rounded-full">
          0
        </span>
      </div>

      <div className="flex w-full flex-wrap ">
        {ticketItems.map((ticketItem, index) => (
          <div
            className="px-6 rounded-lg h-fit overflow-hidden my-10 md-my-0 w-full sm:w-1/2 md:w-1/2 xl:w-1/4 "
            key={ticketItem.title}
          >
            <div className="bg-white px-2 py-3 rounded-lg">
              <div className="w-full h-48   relative mx-auto ">
                <Image
                  className="rounded-lg hover:grow hover:shadow-lg"
                  src={ticketItem.image}
                  layout="fill"
                  objectFit="cover"
                  alt={`shodex garden ${ticketItem.title}`}
                />
              </div>

              <h4 className="text-grey-500  font-semibold text-base mt-4 mb-2 mx-2">
                {ticketItem.title}
              </h4>
              <h4 className="text-lime-500  font-semibold text-2xl mx-2">
                #{ticketItem.price}.00
              </h4>

              <button className="w-full hover:bg-lime-600 ease-in-out duration-300 bg-transparent text-lime-500 hover:text-zinc-50 border-2 border-lime-500 py-3  mt-8   rounded lg:text-sm font-bold ">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-100 text-center">
        <button className="w-fit hover:bg-lime-600 bg-lime-500 ease-in-out duration-300 text-zinc-50  py-3 px-16 mx-auto mt-5 mb-32 rounded lg:text-sm font-bold ">
          View Cart
        </button>
      </div>
    </section>
  );
}

export default TicketsListing;
