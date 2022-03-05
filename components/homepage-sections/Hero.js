import React from "react";
import heroBg from "../../images/herobg.svg";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section
      className={`w-full h-[calc(100vh-4rem)] z-20  relative text-zinc-50`}
    >
      <div className="w-full h-full relative">
        <Image src={heroBg} layout="fill" objectFit="cover" priority />

        <div className="absolute inset-0 bg-[#00000080] ">
          <div className="max-w-[1400px] mx-auto h-full px-4 flex items-center ">
            <div className="lg:max-w-screen-md w-fll lg:text-left text-center">
              <h1 className="text-5xl font-semibold  my-4">
                If You Love Fun, You’ll Love Shodex Garden{" "}
              </h1>
              {/* <h1 className="text-5xl font-semibold  my-4">
                Come Have fun with friends & family
              </h1> */}
              <p>
                There is nothing better than having fun with the ones you love
                and cherish.
              </p>
              <button className="hover:bg-lime-600 ease-in-out duration-300 bg-lime-500 py-3  mt-6 px-6  rounded lg:text-sm font-semibold text-zinc-50">
                <Link href="/about">About Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
