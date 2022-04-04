import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
// import Image from "next/image";
// import paymentImg from "../images/paymentImg.png";
import axios from "axios";
import OrderDone from "./OrderDone";
import lookdown from "../images/look-down.jpg";
import paystack from "../images/paystack.png";
import Image from "next/image";

function Payment({ config, setIsPayment, cart }) {
  // document.querySelector("paystack_btn").innerHTML = "hi";
  const [paymentRes, setPaymentRes] = useState(false);
  const [err, SetErr] = useState(false);
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    // text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handlePayment = (ref) => {
    var data = JSON.stringify([cart, config]);

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
        setPaymentRes(response.data);
      })
      .catch(function (error) {
        console.log(error);
        SetErr(true);
      });
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
      {/* <button onClick={() => setPaymentRes(!paymentRes)}>lll</button> */}

      {paymentRes ? (
        <OrderDone
          // ticketId={paymentRes && paymentRes.ticketId}
          ticketId={paymentRes ? paymentRes[0].ticketId : "error"}
          isError={err}
        />
      ) : (
        <>
          <h1 className="text-2xl -mt-3 font-semibold text-zinc-700 text-center ">
            Pay With Paystack
          </h1>
          <div className="w-full md:h-[180px] h-[250px] md:w-1/2 relative rounded-lg text-center mx-auto my-12">
            {" "}
            <Image
              src={lookdown}
              layout="fill"
              objectFit="cover"
              alt={`look donwards`}
              className="rounded-lg"
            />
          </div>

          <div className="px-10 my-5">
            <PaystackButton
              {...componentProps}
              className="flex items-center justify-center w-full hover:bg-lime-600 cursor-pointer bg-lime-500 ease-in-out duration-300 text-zinc-50 py-4 mx-auto my-5 rounded font-bold "
            >
              <MdPayments className="mr-3 text-xl" /> <span>PAY NOW!</span>
            </PaystackButton>
          </div>
          <div className="w-32 h-fit relative rounded-lg m-0 p-0 mx-auto">
            {" "}
            <Image
              src={paystack}
              layout="responsive"
              objectFit="cover"
              alt={`look donwards`}
              className="rounded-lg"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Payment;
