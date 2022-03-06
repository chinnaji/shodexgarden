import React from "react";
import heroBg from "../../images/herobg.svg";
import Image from "next/image";
import Link from "next/link";
function Hero2() {
  return (
    <div className="max-w-[1400px] mx-auto h-full px-4 flex flex-col items-center pt-16">
      <div className="max-w-4xl mx-auto text-center bitter mb-10">
        <h1 className="bitter text-5xl font-bold  my-4">
          If You Love <span className="text-amber-400 bitter"> Fun </span>,
          You’ll Love
          <span className="text-lime-500 bitter"> Shodex Garden </span>{" "}
        </h1>
      </div>
      <div className="relative w-full lg:h-[400px] h-[350px] mx-10">
        <Image
          src={heroBg}
          layout="fill"
          className="shadow rounded-md z-20"
          objectFit="cover"
          priority
          loading="eager"
        />
      </div>
      <div className="bg-lime-500 w-full h-[100px] bottom-0 absolute z-10"></div>
    </div>
  );
}

export default Hero2;
