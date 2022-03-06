import react, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/homepage-sections/Hero";
import ImageGallery from "../components/homepage-sections/ImageGallery";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import PopularAattractions from "../components/homepage-sections/PopularAattractions";
import ServicesSection from "../components/homepage-sections/SevicesSection";
import Hero2 from "../components/homepage-sections/Hero2";
import { FaDirections } from "react-icons/fa";

export default function Home() {
  const [isis, setisis] = useState(true);
  return (
    <main className="h-full w-full  text-grey-600">
      <FaDirections
        className="cursor-pointer text-white bg-black mr-2 fixed right-5 top-20 z-40"
        onClick={() => setisis(!isis)}
      />{" "}
      {isis ? <Hero /> : <Hero2 />}
      <div className=" max-w-[1400px] mx-auto my-5  px-3">
        <PopularAattractions />
        <ServicesSection />
        <ImageGallery />
      </div>
      <GoogleMap />
    </main>
  );
}
