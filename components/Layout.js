import React from "react";
import { Children } from "react/cjs/react.production.min";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
