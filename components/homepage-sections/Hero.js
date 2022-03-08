import React from "react";
import herosquare from "../../images/heroimg.png";
import leaf from "../../images/leaf.png";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

function Hero() {
  return (
    <section
      className={`w-full h-[calc(100vh-4rem)] z-20  relative text-zinc-50`}
    >
      <div className="max-w-[1200px] mx-auto  h-full flex flex-wrap px-5">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div>
            <h1 className=" text-center md:text-left font-bold lg:font-black text-zinc-900 text-4xl lg:text-5xl max-w-xl lg:mt-0 mt-24">
              If You Love <span className="text-lime-500">Fun</span>, You’ll
              Love Shodex Garden
            </h1>
            <div>
              <Link href="/">
                <button className="mx-auto md:mx-0 flex px-10 py-3 text-base my-6 md:my-12 bg-amber-500 hover:bg-amber-600 cursor-pointer rounded transition duration-150 ease-out hover:ease-in">
                  <span className="mr-2 font-semibold">About Us</span>
                  <span>
                    <BsArrowRightShort className="text-2xl" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex md:justify:end justify-center items-center ">
          <div className="w-fit h-fit p-2 rounded-lg relative ">
            <div className="md:w-[420px] w-80 md:h-96 h-72 relative  rounded-lg ">
              <Image
                src={herosquare}
                layout="fill"
                objectFit="cover"
                priority
                loading="eager"
                alt="hero background image"
                className="rounded-lg"
                placeholder="blur"
              />
            </div>

            {/* <div className="w-16 h-32 absolute left-16  top-[-80px]  rounded-t-full rounded-b-none hidden md:block">
              <Image
                src={heroImg1}
                layout="responsive"
                objectFit="cover"
                alt="hero background image"
                className="rounded-full"
                // placeholder="blur"
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-32 absolute left-0  bottom-0  rounded-lg hidden md:block">
        <Image
          src={leaf}
          layout="responsive"
          objectFit="cover"
          alt="hero background image"
          className="rounded-lg"
          // placeholder="blur"
        />
      </div>
    </section>
  );
}

export default Hero;
