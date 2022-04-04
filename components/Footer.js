import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white">
      <section className="px-2 py-8 max-w-5xl mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/3 text-center md:text-left my-5 ">
          <h3 className="text-lime-500 text-2xl mb-3">Quick Links</h3>
          <ul>
            <li className="my-2">
              {" "}
              <Link href="/tickets">Buy Tickets</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/privacy">Privacy/Policy</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/about">About Us</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/services">Services</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3 text-center md:text-left my-5">
          <h3 className="text-lime-500 text-2xl mb-3">Follow Us</h3>
          <ul>
            <li className="my-2">
              {" "}
              <a href="https://www.instagram.com/shodex_gardens/">
                Instagram
              </a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="https://m.facebook.com/Shodex-Gardens-1262821550411163/">
                Facebook
              </a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="https://twitter.com/shodexgardens14">Twitter</a>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3 text-center md:text-left my-5">
          <h3 className="text-lime-500 text-2xl mb-3">Contact Us</h3>
          <ul>
            <li className="my-2">
              {" "}
              <a href="tel:09063646842">09063646842</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="https://maps.google.com/maps/dir//Shodex+Garden+251%2F253+Ikorodu+Rd+Ilupeju+101233+Lagos/@6.5586142,3.366388,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x103b8d8ef89ec639:0x2b52a2d27d27c2fd">
                251/253 Ikorodu Rd, Ilupeju, Lagos
              </a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="mailto:admin@shodexgarden.com">
                admin@shodexgarden.com
              </a>{" "}
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
