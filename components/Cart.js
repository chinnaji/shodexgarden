import React from "react";
import Image from "next/image";
import { BiX } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { CgMathMinus } from "react-icons/cg";
import ticketImage1 from "../images/tickets (1).jpg";
import ticketImage2 from "../images/tickets (2).jpg";
import ticketImage3 from "../images/tickets (3).jpg";
import ticketImage4 from "../images/tickets (4).jpg";

function Cart({ cart, setCart }) {
  const removeSingleItemFromCart = (itemId) => {
    // get item from the cart
    const newCartItems = cart.filter((cartItems) => cartItems.id !== itemId);
    setCart(newCartItems);
    console.log(cart);
  };
  return (
    <>
      <h2 className="text-lime-500 text-center font-semibold text-2xl mb-3">
        Cart Items
      </h2>
      {cart.map((cartItem, index) => (
        <div
          className="md:bg-white bg-lime-50 py-5 px-6 rounded-lg h-fit overflow-hidden my-5 md:my-10 md-my-0 w-full flex md:flex-row flex-col md:items-center"
          key={cartItem.id}
        >
          {/* remove item */}
          <span className="hidden md:block text-sm text-red-400 cursor-pointer mr-4">
            <BiX
              className="text-2xl"
              onClick={() => removeSingleItemFromCart(cartItem.id)}
            />{" "}
          </span>

          <span className="flex items-center">
            <div className="w-16 h-16 relative mr-3 ">
              <Image
                className="rounded-md  hover:shadow-lg"
                src={
                  cartItem.image.src.slice(20, 31) === "tickets (1)"
                    ? ticketImage1
                    : cartItem.image.src.slice(20, 31) === "tickets (2)"
                    ? ticketImage2
                    : cartItem.image.src.slice(20, 31) === "tickets (3)"
                    ? ticketImage3
                    : ticketImage4
                }
                layout="fill"
                objectFit="cover"
                alt={`shodex garden ${cartItem.title}`}
              />
            </div>

            {/* item title */}
            <div className="flex flex-col">
              <h4 className="text-grey-500  font-semibold text-base  mb-2 mx-2">
                {cartItem.title}
              </h4>

              {/* item price */}
              <h4 className="text-lime-500  font-semibold text-base mx-2">
                #{cartItem.price}{" "}
                <span className="text-grey-500 text-sm">
                  {"  x " + cartItem.quantity}
                </span>
                {/* {Intl.NumberFormat("en-US").format(
                    cartItem.price * cartItem.quantity
                  )} */}
              </h4>
            </div>
          </span>

          <hr className="my-5 md:none" />
          {/* increment - decrement items */}
          <div className="md:hidden flex justify-between ">
            <span className=" text-sm text-red-400 cursor-pointer mr-4 flex items center">
              <BiX className="text-2xl" /> <span>Remove</span>
            </span>

            <span className="flex text-md  w-fit md:mt-0  px-2 py-1 justify-between items-center border rounded-md  border-lime-500">
              <BsPlus className="cursor-pointer" />
              <span className="mx-5 font-semibold text-lime-500  ">
                {cartItem.quantity}
              </span>
              <CgMathMinus className="cursor-pointer" />
            </span>
          </div>

          <div className="hidden md:flex text-md md:ml-auto md:w-fit w-1/4 mt-3 md:mt-0 mx-auto px-2 py-1 justify-between items-center border rounded-md  border-lime-500">
            <BsPlus className="cursor-pointer" />
            <span className="mx-5 font-semibold text-lime-500  ">
              {cartItem.quantity}
            </span>
            <CgMathMinus className="cursor-pointer" />
          </div>

          {/* <hr className="my-5" /> */}
        </div>
        // setTotal()
      ))}

      <div className="flex flex-wrap items-center">
        <span>
          <input type="text" placeholder="Coupon Code" />
        </span>
        <span>
          Total ={" "}
          {cart.map((cartItem, index) => cartItem.price * cartItem.quantity)}
        </span>
      </div>

      <div className="w-100 text-center">
        <button
          //   onClick={() => setIsModal(true)}
          className="w-full hover:bg-lime-600 bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto my-5  rounded lg:text-sm font-bold "
        >
          Proceed To Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;
