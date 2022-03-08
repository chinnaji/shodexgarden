import React from "react";
import Image from "next/image";
import { CgInstagram } from "react-icons/cg";
import ig1 from "../../images/ig/img (1).jpg";
import ig2 from "../../images/ig/img (2).jpg";
import ig3 from "../../images/ig/img (3).jpg";
import ig4 from "../../images/ig/img (4).jpg";
import ig5 from "../../images/ig/img (5).jpg";
import ig6 from "../../images/ig/img (6).jpg";
import ig7 from "../../images/ig/img (7).jpg";
import ig8 from "../../images/ig/img (8).jpg";

function ImageGallery() {
  const images = [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8];
  return (
    <section className="mt-32 mb-40">
      <h2 className="text-lime-500 text-center font-semibold text-4xl ">
        #ShodexGarden
      </h2>
      <p className="w-full mb-10 text-center">
        Share your Gardens moments with us on Instagram!
      </p>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div
            className="p-2 w-full sm:w-1/2 md:w-1/2 xl:w-1/4  h-52"
            key={index}
          >
            <div className="w-full h-full   relative mx-auto ">
              <Image
                className=" shadow-lg rounded-md"
                src={image}
                layout="fill"
                objectFit="cover"
                alt="shodex garden instagram photos"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <button className="flex items-center justify-center mx-auto hover:bg-lime-600 ease-in-out duration-300 bg-lime-500 py-3  mt-6 px-14  rounded lg:text-base text-sm font-bold text-zinc-50">
          <CgInstagram className="mr-2 " />{" "}
          <a href="http://www.insstagram.com/shodexgarden">Instagram</a>
        </button>
      </div>
    </section>
  );
}

export default ImageGallery;
