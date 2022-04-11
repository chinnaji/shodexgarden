import React from "react";
import AdminNavbar from "./AdminNavbar";
import { useUser } from "@auth0/nextjs-auth0";
import Spinner from "./Spinner";
import logo from "../images/logo.svg";
import Image from "next/image";
import { useSession } from "next-auth/react";
import AdminLogin from "./AdminLogin";

function AdminLayout({ children }) {
  const { data: session } = useSession();

  // const { session } = useSession();
  // console.log(session);
  return (
    <>
      {!session ? (
        <AdminLogin />
      ) : (
        <>
          <>
            <AdminNavbar />
            <div className="text-center mt-10"></div>
            <main>{children}</main>
          </>
        </>
      )}
    </>
  );
}

export default AdminLayout;
