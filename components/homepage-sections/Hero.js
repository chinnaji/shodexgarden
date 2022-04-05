import React from "react";
import herosquare from "../../images/heroimg.jpg";
import leaf from "../../images/leaf.png";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

function Hero() {
  return (
    <section
      className={`w-full h-[calc(100vh-4rem)] z-20  relative text-zinc-50 `}
    >
      <div className="max-w-[1200px] mx-auto  h-full flex flex-wrap px-5">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div>
            <h1 className=" text-center lg:text-left font-semibold lg:font-semibold text-zinc-900 text-4xl lg:text-5xl max-w-xl lg:mt-0 mt-24">
              If You Love <span className="text-lime-500">Fun</span>, You’ll
              Love Shodex Garden
            </h1>
            <p className="text-zinc-800 text-sm mt-5 text-center lg:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              blanditiis ipsa ducimus laborum dolor? Totam nostrum fugit, culpa
            </p>
            <div>
              <Link href="/" passHref>
                <button className=" mx-auto lg:mx-0 flex px-7 text-sm py-3  my-6 lg:my-12 bg-lime-500 hover:bg-lime-600 cursor-pointer rounded transition duration-100 ease-out hover:ease-in">
                  <span className="mr-2 font-semibold">About Us</span>
                  {/* <span>
                    <BsArrowRightShort className="text-2xl" />
                  </span> */}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex lg:justify:end justify-center items-center ">
          <div className="w-fit h-fit p-2 rounded-lg relative ">
            <div className="p-2  mt-10 lg:mt-0 lg:w-[420px] w-80 lg:h-96 h-72 relative lg:rounded-tl-[150px] lg:rounded-tr-[50px] lg:rounded-br-[150px] lg:rounded-bl-[40px]">
              <Image
                src={herosquare}
                layout="fill"
                objectFit="cover"
                priority
                loading="eager"
                alt="hero background image"
                className="shadow-md lg:rounded-tl-[150px] lg:rounded-tr-[50px] lg:rounded-br-[150px] lg:rounded-bl-[40px] rounded-tl-[100px] rounded-tr-[50px] rounded-br-[100px] rounded-bl-[40px]"
                placeholder="blur"
              />
            </div>

            {/* <div className="w-16 h-32 absolute left-16  top-[-80px]  rounded-t-full rounded-b-none hidden lg:block">
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

      <div className="w-32 absolute left-0  bottom-0  rounded-lg hidden lg:block">
        <Image
          src={leaf}
          layout="responsive"
          objectFit="cover"
          alt="hero background image"
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
    </section>
  );
}

export default Hero;
