import React from "react";
import heroBg from "../../images/herobg.svg";
import Image from "next/image";
import Link from "next/link";
function Hero2() {
  return (
    <div className="max-w-[1400px] mx-auto h-full px-4 flex items-center ">
      <div className="max-w-md mx-auto text-center bitter">
        <h1 className="bitter text-5xl font-semibold  my-4">
          If You Love <span className="text-amber-400">Fun</span>, You’ll Love
          <span className="text-lime-500">Shodex Garden</span>{" "}
        </h1>

        <div className="relative w-full h-72">
          <Image
            src={heroBg}
            layout="fill"
            className="shadow rounded-md"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
