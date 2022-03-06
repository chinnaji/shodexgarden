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
              <a href="/tickets">Buy Tickets</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="/tickets">Privacy/Policy</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="/tickets">About Us</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="/tickets">Services</a>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lime-500 text-2xl mb-3">Follow Us</h3>
          <ul>
            <li className="my-2">
              {" "}
              <a href="/tickets">Instagram</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="/tickets">Facebook</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="/tickets">Twitter</a>{" "}
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-lime-500 text-2xl mb-3">Contact Us</h3>
          <ul>
            <li className="my-2">
              {" "}
              <a href="/tickets">09063646842</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="/tickets">251/253 Ikorodu Rd, Ilupeju, Lagos</a>{" "}
            </li>
            <li className="my-2">
              {" "}
              <a href="/tickets">admin@shodexgarden.com</a>{" "}
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
