import React, { useState } from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import { useSession, signIn } from "next-auth/react";
import Spinner from "./Spinner";

function AdminLogin() {
  const { status } = useSession();

  return (
    <section className="fixed h-full w-full flex items-center justify-center px-5 py-10">
      {status === "loading" ? (
        <Spinner size="16" />
      ) : (
        <div className="h-96 w-72 rounded-md text-center shadow-md bg-white flex items-center justify-center">
          <div className="text-center ">
            <a className="w-24 h-16 relative cursor-pointer block mx-auto">
              <Image
                src={logo}
                layout="fill"
                alt="shodex garden logo"
                priority
                loading="eager"
              />
            </a>
            <h1 className="my-5 text-lg font-medium">Shodex Garden Admin</h1>

            <a
              onClick={() =>
                signIn("google", { callbackUrl: "http://localhost:3000/admin" })
              }
              href="/api/auth/signin"
              className="my-10 block w-full hover:bg-lime-600 cursor-pointer bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto  rounded  font-bold "
            >
              Login As Admin
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminLogin;
