import React from "react";
import { FaDirections } from "react-icons/fa";
import Link from "next/link";

function GoogleMap() {
  return (
    <section>
      <h2 className="text-lime-500 text-center font-semibold text-3xl mb-5">
        Book a Ticket, Map Your Way{" "}
      </h2>
      <div className="text-center my-5">
        {" "}
        <a href="https://maps.google.com/maps/dir//Shodex+Garden+251%2F253+Ikorodu+Rd+Ilupeju+101233+Lagos/@6.5586142,3.366388,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x103b8d8ef89ec639:0x2b52a2d27d27c2fd">
          <button className="lg:text-base text-sm flex items-center justify-center mx-auto hover:bg-lime-600 ease-in-out duration-300 bg-lime-500 py-3  mt-6 px-8  rounded  font-bold text-zinc-50">
            <FaDirections className="mr-2 " /> Get Directions
          </button>
        </a>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15854.828259090018!2d3.366388!3d6.5586142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b52a2d27d27c2fd!2sShodex%20Garden!5e0!3m2!1sen!2sng!4v1646503035585!5m2!1sen!2sng"
          width={100 + "%"}
          height={400 + "px"}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default GoogleMap;
