import React from "react";

function Checkout() {
  return (
    <div>
      <form action="">
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
          required
        />

        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="phone"
          placeholder="Phone Number"
          required
        />
        {/* <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="date"
          placeholder="Phone Number"
          required
        /> */}
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-lime-500 checked:border-lime-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            Default checkbox
          </label>
        </div>
        <div className="w-100 text-center mt-5">
          <button
            onClick={() => console.log(cart)}
            className="w-full hover:bg-lime-600 bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto my-5  rounded lg:text-sm font-bold "
          >
            Proceed To Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
