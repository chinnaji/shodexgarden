import React, { useState } from "react";
import axios from "axios";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Payment from "./Payment";

function Checkout({ setIsCart, cart, total }) {
  const [isPayment, setIsPayment] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  // const [date, setDate] = useState("");
  const [isNewsletter, setIsNewsletter] = useState(true);

  const handleCheckout = (e) => {
    e.preventDefault();
    // take user details and save it in state
    // take id of items in cart and send them to the server
    // when the response comes back from the server, pass that value into paystack
    setIsPayment(true);
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: (total *= 100),
    metadata: {
      name: fullName,
      phone: phoneNumber,
    },
    publicKey: "pk_test_cd1cb9c6f56c382b19cba19de6de6270879c8976",
  };

  return isPayment ? (
    <Payment config={config} setIsPayment={setIsPayment} cart={cart} />
  ) : (
    <div className="relative">
      <BsFillArrowLeftCircleFill
        onClick={() => setIsCart(true)}
        className="absolute left-0 -top-6 hover:text-zinc-900 text-zinc-700 cursor-pointer text-2xl"
      />
      <h2 className="text-lime-500 text-center font-semibold text-2xl mb-4">
        CHECKOUT
      </h2>
      <form onSubmit={handleCheckout} className="mt-5 mb-2">
        <div>
          <input
            type="text"
            className="block border border-zinc-300 bg-zinc-100 text-zinc-700 w-full p-3 rounded mb-4   focus:outline-none"
            name="fullname"
            placeholder="Full Name"
            required
            onInput={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="email" className="text-lime-500 text-sm">
            *Email Address Your Ticket will be sent to.
          </label>
          <input
            type="text"
            id="email"
            className="block border border-zinc-300 bg-zinc-100 text-zinc-700 w-full p-3 rounded mb-4  focus:outline-none"
            name="email"
            placeholder="Email"
            required
            onInput={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            className="block border border-zinc-300 bg-zinc-100 text-zinc-700 w-full p-3 rounded mb-4  focus:outline-none"
            name="phone"
            placeholder="Phone Number"
            required
            onInput={(e) => setPhoneNumber(e.target.value)}
            minLength="11"
          />
        </div>

        <div className=" text-center mt-5">
          <input
            type="submit"
            value="Proceed To Payment"
            className="w-full hover:bg-lime-600 cursor-pointer bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto my-5  rounded  font-bold "
          />
        </div>
      </form>
    </div>
  );
}

export default Checkout;
