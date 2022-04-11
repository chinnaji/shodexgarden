import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import Image from "next/image";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { AiOutlineCaretDown } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsTelephonePlusFill } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
function AdminNavbar() {
  const router = useRouter();
  const [isDropDown, setIsDropDown] = useState();
  const { data: session } = useSession();

  return (
    <header className=" max-h-20  w-full text-zinc-600 sticky top-0 bg-white z-50 ">
      <nav className=" max-w-[1200px] mx-auto flex items-center justify-between px-5 md:px-3 ">
        <div className="flex  items-center justify-center">
          <Link href="/admin" passHref>
            <a className="w-24 h-16 relative cursor-pointer block ">
              <Image
                src={logo}
                layout="fill"
                alt="shodex garden logo"
                priority
                loading="eager"
              />
            </a>
          </Link>
          <div className="ml-2 font-bold text-sm">Admin</div>
        </div>

        <div className="flex">
          <div className=" relative flex items-center ml-3">
            {/* <div
              onClick={() => setIsDropDown(!isDropDown)}
              className="relative w-8 h-8 bg-amber-500 cursor-pointer text-white font-semibold flex items-center justify-center text-xs rounded-full"
            >
              {session?.user.name[0]}
            </div> */}
            <div className="flex items-center justify-center">
              <div
                onClick={() => setIsDropDown(!isDropDown)}
                className="mr-1 overflow-hidden relative w-8 h-8 bg-amber-500 cursor-pointer text-white font-semibold flex items-center justify-center text-xs rounded-full"
              >
                <Image
                  src={session?.user.image}
                  layout="fill"
                  alt="shodex garden logo"
                  priority
                  loading="eager"
                />
              </div>
              <span>
                <AiOutlineCaretDown text="text-lg text-zinc-500" />
              </span>
            </div>

            {isDropDown ? (
              <div className="absolute top-[56px] right-0  border bg-white px-1 py-3 rounded-md w-32 ">
                <ul>
                  <li>
                    {" "}
                    <a
                      onClick={() => {
                        setIsDropDown(false);
                        signOut({ callbackUrl: "/admin" });
                      }}
                      href="/api/auth/signout"
                      className="flex items-center my-1  w-full px-2 text-sm hover:bg-zinc-100 cursor-pointer text-zinc-500 ease-in-out duration-300  py-2 mx-auto  rounded  "
                    >
                      <FiLogOut className="mr-2" /> Logout
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      onClick={() => setIsDropDown(false)}
                      href="tel:07080961583"
                      className="flex items-center my-1   text-sm w-full px-2 hover:bg-zinc-100 cursor-pointer  ease-in-out duration-300 text-zinc-500  py-2 mx-auto  rounded  "
                    >
                      <BsTelephonePlusFill className="mr-2" /> Support
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdminNavbar;
