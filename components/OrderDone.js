import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { FaDownload } from "react-icons/fa";
import Error from "./Error";

function OrderDone({ ticketId, isError }) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    QRCode.toDataURL("ticketId")
      .then((url) => {
        // console.log(url);
        setSrc(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return ticketId == "error" || isError ? (
    <Error />
  ) : (
    <div>
      {isError}
      <img src={src} alt="qr code" className="w-[200px] mx-auto" />

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
