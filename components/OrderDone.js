import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { FaDownload } from "react-icons/fa";
import Error from "./Error";

function OrderDone({ ticketId, isError, orderNo }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL(ticketId)
      .then((url) => {
        // console.log(url);
        setSrc(url);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);
  return ticketId == "error" || isError ? (
    <Error />
  ) : (
    <div>
      <p className="text-base mb-5 text-center">
        Kindly provide the QRcode below👇 at the entrance gate.
      </p>
      {isError}
      <h1 className="text-center font-semibold text-xl text-black">
        Order No. #{orderNo}
      </h1>
      <img
        src={src}
        alt="shodex gate pass ticket"
        className="w-[200px] mx-auto my-0"
      />
      <p className="text-amber-600 text-sm text-center">
        *check your email for more details on your order.
      </p>
      <div className="w-full text-center mt-5">
        <a
          href={src}
          download
          className="w-full  flex items-center justify-center hover:bg-lime-600 cursor-pointer bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto my-5  rounded  text-sm font-bold "
        >
          <FaDownload className="mr-3 text-xl" />

          <span>Save To Device!</span>
        </a>
      </div>
    </div>
  );
}

export default OrderDone;
