import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import GoogleMap from "../components/homepage-sections/GoogleMap";

function contact() {
  return (
    <>
      <main className="max-w-[1200px] mx-auto my-5 mb-24  px-3">
        <h1 className="text-lime-500 text-center font-semibold text-4xl my-16">
          Contact Us{" "}
        </h1>

        <section className="flex flex-wrap ">
          <div className="w-full lg:w-1/2 p-2 flex flex-wrap ">
            <div className="w-full">
              <h2 className="text-3xl my-5 text-zinc-800">Contact Details</h2>
            </div>

            <div className="w-full md:w-1/2 my-5 text-lime-500">
              <GoLocation className="text-4xl mb-3 " />
              <h3 className="text-xl">Our Location</h3>
              <p className="text-base my-2 text-zinc-500">
                251/253 Ikorodu Rd, Ilupeju, Lagos
              </p>
            </div>

            <div className="w-full md:w-1/2 my-5 text-lime-500">
              <BsTelephone className="text-4xl mb-3 " />
              <h3 className="text-xl">Call Us</h3>
              <p className="text-base my-2 text-zinc-500">09063646842</p>
            </div>

            <div className="w-full md:w-1/2 my-5 text-lime-500">
              <BsEnvelope className="text-4xl mb-3 " />
              <h3 className="text-xl">Write To Us</h3>
              <p className="text-base my-2 text-zinc-500">
                admin@shodexgarden.com
              </p>
            </div>

            <div className="w-full md:w-1/2 my-5 text-lime-500">
              <BiTime className="text-4xl mb-3 " />
              <h3 className="text-xl">Opening Hours</h3>
              <p className="text-base my-2 text-zinc-500">
                Monday - Friday: 8am to 6pm
                <br />
                Saturday - Sunday: 9am to 6pm{" "}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-2 h-fit  flex flex-wrap ">
            <div className="w-full  ">
              <h2 className="text-3xl my-5 text-zinc-800">Get A Free Quote</h2>
            </div>

            <div className="w-full text-lime-500">
              <form
                action=""
                className="flex flex-wrap items-center text-zinc-600"
              >
                <div className="w-full md:w-1/2  my-2  p-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full d-block px-4 rounded-sm focus:outline-none py-2 bg-transparent border-2"
                  />
                </div>

                <div className="w-full md:w-1/2  p-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Adress"
                    className="w-full d-block px-4 rounded-sm focus:outline-none py-2 bg-transparent border-2"
                  />
                </div>

                <div className="w-full my-2 p-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full d-block px-4 rounded-sm focus:outline-none py-2 bg-transparent border-2"
                  />
                </div>

                <div className="w-full my-2 p-2">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    defaultValue="Message"
                    className="w-full d-block px-4 rounded-sm focus:outline-none py-2 bg-transparent border-2"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <GoogleMap />s
    </>
  );
}

export default contact;
