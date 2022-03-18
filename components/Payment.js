import React, { useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Payment({ config, setIsPayment }) {
  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

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

  return (
    <div className="relative">
      <BsFillArrowLeftCircleFill
        onClick={() => setIsPayment(false)}
        className="absolute left-0 -top-7 text-zinc-700 cursor-pointer text-2xl"
      />
      <h1>Pay Wwith Paystack</h1>
      <PaystackButton {...componentProps} className="text-emerald-600" />
    </div>
  );
}

export default Payment;
