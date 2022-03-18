import React, { useState } from "react";
import axios from "axios";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import Payment from "./payment";

function Checkout({ setIsCart, cart, total }) {
  const [isPayment, setIsPayment] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [isNewsletter, setIsNewsletter] = useState(true);

  const handleCheckout = () => {
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
      name: name,
      phone: phoneNumber,
    },
    publicKey: process.env.PUBLIC_KEY,
    text: "Pay Now",
  };

  return isPayment ? (
    <Payment config={config} setIsPayment={setIsPayment} />
  ) : (
    <div className="relative">
      <BsFillArrowLeftCircleFill
        onClick={() => setIsCart(true)}
        className="absolute left-0 -top-7 text-zinc-700 cursor-pointer text-2xl"
      />
      <h2 className="text-lime-500 text-center font-semibold text-2xl mb-4">
        CHECKOUT
      </h2>
      <form onSubmit={handleCheckout} className="mt-5 mb-2">
        <div>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4   focus:outline-none"
            name="fullname"
            placeholder="Full Name"
            required
            onInput={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            id="email"
            className="block border border-grey-light w-full p-3 rounded mb-4  focus:outline-none"
            name="email"
            placeholder="Email"
            required
            onInput={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="text-lime-500 text-sm">
            *Email Address Yoour Tiket will bw sent to.
          </label>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4  focus:outline-none"
            name="phone"
            placeholder="Phone Number"
            required
            onInput={(e) => setPhoneNumber(e.target.value)}
            minlength="11"
          />

          {/* <input
            type="date"
            className="block border border-grey-light w-full p-3 rounded mb-4  focus:outline-none"
            name="date"
            placeholder="Phone Number"
            required
            onChange={(e) => setDate(e.target.value)}
          /> */}
          <div className="form-check mt-5 flex items-center">
            <input
              className="form-check-input  h-5 w-5 border border-gray-300 rounded-sm bg-white text-lime-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              id="flexCheckDefault"
              onChange={(e) => setIsNewsletter(e.target.checked)}
              defaultChecked={isNewsletter}
            />

            <label
              className="form-check-label inline-block text-lime-500"
              htmlFor="flexCheckDefault"
            >
              Sign Up To Our Newsletter
            </label>
          </div>
        </div>

        <div className="w-100 text-center mt-5">
          <input
            type="submit"
            value="Proceed To Payment"
            className="w-full hover:bg-lime-600 cursor-pointer bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto my-5  rounded lg:text-sm font-bold "
          />
        </div>
      </form>
    </div>
  );
}

export default Checkout;
