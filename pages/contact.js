import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import Head from "next/head";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContactForm = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      phoneNumber,
      message,
    };

    // console.log(contactData);
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        if (data.success === true) {
          setIsSent(true);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Contact Shodex Garden </title>
        <meta
          name="description"
          content="you reach us on - 09063646842. Shodex Gardens has a 24/7 highly reliable customer service "
        />
        <meta
          name="keywords"
          content="shodex,contact shodex garden,shodex garden,gardens in lagos,parks in lagos"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shodexgarden.com/contact" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - Shodex Garden " />
        <meta
          property="og:description"
          content="you reach us on - 09063646842. Shodex Gardens has a 24/7 highly reliable customer service "
        />
        <meta property="og:url" content="https://shodexgarden.com/contact" />
        <meta property="og:site_name" content="Shodex Garden" />
        <meta
          property="og:image"
          content="https://shodexgarden.com/wp-content/uploads/2021/06/shodex_garden-8.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="10 minutes" />
      </Head>
      <main className="max-w-[1200px] mx-auto my-5 mb-24  px-3">
        <h1 className="text-lime-500 text-center font-semibold text-4xl my-16">
          Contact Us{" "}
        </h1>

        <section className="flex flex-wrap ">
          <div className="w-full lg:w-1/2 p-2 flex flex-wrap ">
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
            {isSent ? (
              <section className="my-10 py-10  px-2 max-w-6xl	mx-auto flex flex-wrap flex-col justify-center items-center">
                <span className="w-32 h-32 shadow-lg shadow-lime-500/40  bg-lime-500 flex items-center justify-center rounded-full">
                  <BsFillCheckCircleFill className="text-zinc-100 text-4xl" />
                </span>
                <h3 className="text-xl mt-5">Message Successfully Sent!</h3>
              </section>
            ) : (
              <>
                <div className="w-full  ">
                  <h2 className="text-3xl my-5 text-zinc-800">
                    Get A Free Quote
                  </h2>
                </div>

                <div className="w-full text-lime-500">
                  <form
                    onSubmit={handleContactForm}
                    className="flex flex-wrap items-center text-zinc-600"
                  >
                    <div className="w-full md:w-1/2  my-2  p-2">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Name"
                        className="w-full d-block px-4 rounded-md focus:outline-none py-2 bg-transparent border-2 border-zinc-300 bg-zinc-100 text-zinc-700"
                      />
                    </div>

                    <div className="w-full md:w-1/2  p-2">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Email Adress"
                        className="w-full d-block px-4 rounded-md focus:outline-none py-2 bg-transparent border-2 border-zinc-300 bg-zinc-100 text-zinc-700"
                      />
                    </div>

                    <div className="w-full my-2 p-2">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        placeholder="Phone Number"
                        className="w-full d-block px-4 rounded-md focus:outline-none py-2 bg-transparent border-2 border-zinc-300 bg-zinc-100 text-zinc-700"
                      />
                    </div>

                    <div className="w-full my-2 p-2">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        cols="5"
                        required
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full d-block px-4 rounded-md focus:outline-none py-2 bg-transparent border-2 border-zinc-300 bg-zinc-100 text-zinc-700"
                      />
                    </div>
                    <div className="w-full text-white text-center -m-t-5 px-2">
                      <button className=" mb-12 mt-5 md:w-fit text-center w-full  mx-auto  flex justify-center items-center px-7 text-sm py-3   bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
                        {isLoading ? (
                          <span className="mr-2 font-semibold">Loading...</span>
                        ) : (
                          <>
                            <span className="mr-2 font-semibold">SEND</span>
                            <span>
                              <FaPaperPlane className="text-xl" />
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <GoogleMap />s
    </>
  );
}

export default contact;
