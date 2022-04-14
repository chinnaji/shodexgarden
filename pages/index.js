import react, { useState } from "react";
import Head from "next/head";
import Hero from "../components/homepage-sections/Hero";
import ImageGallery from "../components/homepage-sections/ImageGallery";
import GoogleMap from "../components/homepage-sections/GoogleMap";
import PopularAattractions from "../components/homepage-sections/PopularAattractions";
import ServicesSection from "../components/homepage-sections/SevicesSection";
import Testimonial from "../components/homepage-sections/Testimonial";

export default function Home() {
  return (
    <main className="h-full w-full  text-grey-600">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Shodex Garden </title>
        <meta
          name="description"
          content="Shodex Garden Is A Well Landscaped Park and Garden With The Perfect Ambience For Events & Hangouts. It is located at 251/253 Ikorodu Rd, Ilupeju 101233, Lagos."
        />
        <meta
          name="keywords"
          content="shodex,shodex garden,gardens in lagos,parks in lagos"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shodexgarden.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shodex Garden - Best in lagos" />
        <meta
          property="og:description"
          content="Shodex Garden Is A Well Landscaped Park and Garden With The Perfect Ambience For Events & Hangouts. It is located at 251/253 Ikorodu Rd, Ilupeju 101233, Lagos."
        />
        <meta property="og:url" content="https://shodexgarden.com/" />
        <meta property="og:site_name" content="Shodex Garden" />
        <meta
          property="og:image"
          content="https://shodexgarden.com/wp-content/uploads/2021/06/shodex_garden-8.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="10 minutes" />
      </Head>
      <Hero />
      <div className=" max-w-[1200px] mx-auto my-5  px-3">
        <PopularAattractions />
        <ServicesSection />
        <Testimonial />
        <ImageGallery />
      </div>
      <GoogleMap />
    </main>
  );
}
