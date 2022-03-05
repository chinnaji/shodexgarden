import Head from "next/head";
import Image from "next/image";
import Hero from "../components/homepage-sections/Hero";
import PopularAattractions from "../components/homepage-sections/PopularAattractions";
import ServicesSection from "../components/homepage-sections/SevicesSection";

export default function Home() {
  return (
    <main className="h-full w-full  text-grey-600">
      <Hero />

      <div className=" max-w-[1400px] mx-auto my-5  px-3">
        <PopularAattractions />
        <ServicesSection />
      </div>
    </main>
  );
}
