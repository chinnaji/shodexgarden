import React, { useState } from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <header className="w-full text-zinc-600 sticky top-0 bg-white z-50">
      <nav className=" max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-3">
        <div className="w-24 h-16 relative cursor-pointer">
          <Link href="/" passHref>
            <Image src={logo} layout="fill" alt="shodex garden logo" priority />
          </Link>
        </div>

        <div className="flex">
          <div
            className={` ${
              isSidebar ? "block" : "hidden"
            } fixed h-screen lg:h-full  bg-white inset-0  ease-in-out duration-500
          lg:block lg:relative`}
          >
            {/* <div className="relativ"> */}
            <MdOutlineClose
              className="cursor-pointer text-3xl  right-10 top-10 absolute lg:hidden "
              onClick={() => setIsSidebar(false)}
            />
            {/* </div> */}

            <ul className="flex lg:flex-row ml-auto flex-col justify-center items-center h-full">
              {navLinks.map((navLink) => (
                <li
                  className="hover:text-lime-500 flex flex-col items-center lg:text-base  px-4 py-2 my-8 lg:my-1 font-medium text-xl lg:capitalize uppercase"
                  onClick={() => setIsSidebar(false)}
                  key={navLink.title}
                >
                  <Link href={navLink.path}>{navLink.title}</Link>
                  {/* {router.pathname === "/" ? (
                    <span className="w-2 h-2 bg-lime-500 rounded-full"></span>
                  ) : (
                    ""
                  )} */}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center ml-3">
            {router.pathname === "/tickets" ? null : (
              <button className="hover:bg-amber-600 ease-in-out duration-300 bg-amber-500  lg:px-3 px-2 py-2 rounded text-sm font-bold text-zinc-50">
                <Link href="/tickets">Buy Tickets</Link>
              </button>
            )}

            <FiMenu
              onClick={() => setIsSidebar(true)}
              className="ml-4 mr-1 lg:hidden cursor-pointer text-2xl"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
