import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// import Image from "next/image";
// import paymentImg from "../images/paymentImg.png";
import axios from "axios";

function Payment({ config, setIsPayment, cart }) {
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handlePayment = (ref) => {
    var data = JSON.stringify(cart);
    // var data = JSON.stringify([cart, reference]);

    var toBeSent = {
      method: "post",
      url: `/api/pay/${ref.reference}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(toBeSent)
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   var raw = JSON.stringify(cart);

    //   var requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };

    //   fetch("/api/pay", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
  };

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    handlePayment(reference);
  };

  return (
    <div className="relative">
      <BsFillArrowLeftCircleFill
        onClick={() => setIsPayment(false)}
        className="absolute left-0 -top-7 text-zinc-700 cursor-pointer text-2xl"
      />

      {/* <div className="w-64 h-52 block mx-auto relative cursor-pointer">
        <Image
          src={paymentImg}
          layout="responsive"
          alt="shodex garden logo"
          priority
          loading="eager"
        />
      </div> */}

      <h1>Pay With Paystack</h1>
      <div className="px-10">
        <PaystackButton
          {...componentProps}
          className="text-white bg-lime-500 w-full py-1.5 "
        />
      </div>
    </div>
  );
}

export default Payment;
