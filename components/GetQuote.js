import React from 'react'
import Image from "next/image";
import Link from "next/link";

function GetQuote({image}) {
  return (
<section className="flex flex-wrap mt-32">
        <div className="w-full lg:w-2/5 relative h-[300px]">
          {/* <div className="w-full md:h-[300px] md:w-1/2 relative"> */}{" "}
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            alt="one of shodex garden project"
            // placeholder="blur"
          />
          {/* </div> */}
        </div>

        <div className="w-full lg:w-3/5 bg-lime-500 flex items-center justify-center py-12">
          <div className="text-center">
            <h2 className="text-white text-3xl text-medium mb-4">
              Contact Us For A Free Quote
            </h2>
            {/* <p className="mt-3 mb-6 text-base">
{service.description}
          </p> */}
            <Link href="/contact">
              <button className="font-semibold rounded-md bg-white transition-all ease-in-out delay-75 text-lime-500 hover:bg-zinc-200 px-8 py-3">
                Get a free quote
              </button>
            </Link>
          </div>
        </div>
      </section>  )
}

export default GetQuote