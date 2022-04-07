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
import Spinner from "./Spinner";

function Payment({ config, setIsPayment, cart }) {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentRes, setPaymentRes] = useState(false);
  const [err, SetErr] = useState(false);
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log("closed");
  };

  const componentProps = {
    ...config,
    // text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handlePayment = (ref) => {
    setIsLoading(true);
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
        // console.log(response.data);
        setPaymentRes(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // console.log(error);
        SetErr(true);
        setIsLoading(false);
      });
  };

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    handlePayment(reference);
  };

  return isLoading ? (
    <div className="my-10 py-5 flex items-center justify-center">
      <Spinner />
      <h2>Generating Ticket...</h2>
    </div>
  ) : (
    <div className="relative">
      {paymentRes ? null : (
        <BsFillArrowLeftCircleFill
          onClick={() => setIsPayment(false)}
          className="absolute left-0 -top-6 text-zinc-700 cursor-pointer text-2xl"
        />
      )}
      {paymentRes ? (
        <OrderDone
          // ticketId={paymentRes && paymentRes.ticketId}
          ticketId={paymentRes ? paymentRes[0].ticketId : "error"}
          isError={err}
        />
      ) : (
        <>
          <h1 className="text-2xl  font-semibold text-zinc-700 text-center ">
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

          <div className="md:px-10 my-5">
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
