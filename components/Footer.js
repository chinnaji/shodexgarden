import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-white">
      <section className="px-2 py-8 max-w-5xl mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <h3 className="text-lime-500 text-2xl mb-3">Quick Links</h3>
          <ul>
            <li className="my-2">
              {" "}
              <Link href="/tickets">Buy Tickets</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/tickets">Privacy/Policy</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/tickets">About Us</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/tickets">Services</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lime-500 text-2xl mb-3">Follow Us</h3>
          <ul>
            <li className="my-2">
              {" "}
              <Link href="/tickets">Instagram</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/tickets">Facebook</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/tickets">Twitter</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lime-500 text-2xl mb-3">Contact Us</h3>
          <ul>
            <li className="my-2">
              {" "}
              <Link href="/tickets">09063646842</Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/tickets">
                251/253 Ikorodu Rd, Ilupeju, Lagos
              </Link>{" "}
            </li>
            <li className="my-2">
              {" "}
              <Link href="/tickets">admin@shodexgarden.com</Link>{" "}
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
