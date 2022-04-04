import React from "react";
import { BiError } from "react-icons/bi";
import Link from "next/link";
function Error() {
  return (
    <div className="px-4 py-6 mx-auto text-center">
      <BiError className="text-red-600 text-6xl mx-auto" />
      <br />
      <h1 className="text-2xl font-semibold text-zinc-700">
        Something Went Wrong!
      </h1>
      <p className="my-5">
        Please try again or kindly{" "}
        <span className="text-lime-500 underline">
          <Link href="/contact">contact support</Link>{" "}
        </span>
        if issue persists.
      </p>
    </div>
  );
}

export default Error;
