import React, { useState } from "react";
import Image from "next/image";
import { BiX } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { CgMathMinus } from "react-icons/cg";
import emptyCart from "../images/empty-cart.png";
import Checkout from "./Checkout";

function Cart({ cart, setCart, total }) {
  const [isCart, setIsCart] = useState(true);

  const handleQuantityChange = (cartItemId, type) => {
    // get the item in the cart
    const item = cart.find(
      (singleCartItem) => singleCartItem.id === cartItemId
    );

    // increment or decrement the itmes quantity
    type === "increment"
      ? (item.quantity = item.quantity + 1)
      : (item.quantity = item.quantity - 1);

    // if the quantity is 0 change it to one
    if (item.quantity == 0) {
      item.quantity = 1;
      alert("ticket quantity can't be less than one");
    }

    const updatedCart = cart.map((singleCartItem) => {
      if (item.id === singleCartItem.id) {
        return item;
      }

      return singleCartItem;
    });
    setCart(updatedCart);
  };

  const removeSingleItemFromCart = (itemId) => {
    // get item from the cart
    const newCartItems = cart.filter((cartItems) => cartItems.id !== itemId);
    setCart(newCartItems);
    // console.log(cart);
  };

  return isCart ? (
    <>
      <h2 className="text-lime-500 text-center font-semibold text-2xl mb-3">
        Cart Item(s)
      </h2>
      {cart.length > 0 ? (
        <>
          {cart.sort().map((cartItem, index) => (
            <div
              className=" bg-zinc-50 py-5 px-6 rounded-lg h-fit overflow-hidden my-5  md-my-0 w-full flex md:flex-row justify-between flex-col md:items-center"
              key={cartItem.id}
            >
              {/* remove item */}
              <span className="hidden md:block text-sm text-red-400 cursor-pointer mr-4">
                <BiX
                  className="text-xl"
                  onClick={() => removeSingleItemFromCart(cartItem.id)}
                />{" "}
              </span>

              <span className="flex items-center">
                <div className="w-16 h-16 relative mr-3 ">
                  <Image
                    className="rounded-md  hover:shadow-lg"
                    src={cartItem.image}
                    layout="fill"
                    objectFit="cover"
                    alt={`shodex garden ${cartItem.title} ticket`}
                  />
                </div>

                {/* item title */}
                <div className="flex flex-col">
                  <h4 className="text-zinc-600 text-sm  font-semibold   mb-2 mx-2">
                    {cartItem.title}
                  </h4>

                  {/* item price */}
                  <h4 className="text-lime-500  font-semibold text-base mx-2">
                    &#8358;{Intl.NumberFormat("en-US").format(cartItem.price)}{" "}
                    <span className="text-zinc-500 text-sm">
                      {"  x " + cartItem.quantity}
                    </span>
                  </h4>
                </div>
              </span>

              <hr className="my-5 md:none" />
              {/* increment - decrement items */}
              <div className="md:hidden flex justify-between items-center ">
                <span
                  className=" text-sm text-red-400 cursor-pointer mr-4 flex items center"
                  onClick={() => removeSingleItemFromCart(cartItem.id)}
                >
                  <BiX className="text-2xl" /> <span>Remove</span>
                </span>

                <span className="flex text-md  w-fit md:mt-0  px-2 py-1 justify-between items-center  rounded-md  ">
                  <span
                    onClick={() =>
                      handleQuantityChange(cartItem.id, "increment")
                    }
                    className="bg-lime-500 p-1.5 rounded hover:bg-lime-600 cursor-pointer text-white"
                  >
                    <BsPlus />
                  </span>
                  <span className="mx-5 font-semibold text-zinc-500  ">
                    {cartItem.quantity}
                  </span>

                  <span
                    onClick={() =>
                      handleQuantityChange(cartItem.id, "decrement")
                    }
                    className="bg-lime-500 p-1.5 rounded hover:bg-lime-600 cursor-pointer text-white"
                  >
                    <CgMathMinus />
                  </span>
                </span>
              </div>

              <div className="hidden md:flex text-md md:ml-auto md:w-fit w-1/4 mt-3 md:mt-0 mx-auto px-2 py-1 justify-between items-center  rounded-md  ">
                <span
                  onClick={() => handleQuantityChange(cartItem.id, "increment")}
                  className="bg-lime-500 p-1.5 rounded hover:bg-lime-600 cursor-pointer text-white"
                >
                  <BsPlus />
                </span>

                <span className="mx-5 font-semibold text-zinc-800  ">
                  {cartItem.quantity}
                </span>
                <span
                  onClick={() => handleQuantityChange(cartItem.id, "decrement")}
                  className="bg-lime-500 p-1.5 rounded hover:bg-lime-600 cursor-pointer text-white"
                >
                  <CgMathMinus />
                </span>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap justify-between items-center w-full  px-2 pt-5 border-t-2 border-zinc-100">
            <span className="flex mb-5 md:mb-0">
              <input
                type="text"
                placeholder="Enter Voucher"
                className="w-full bg-transparent border px-2 py-1 border-zinc-400 rounded-tl-md rounded-bl-md focus:outline-none text-zinc-400"
              />
              <button className=" text-sm rounded-tr-md rounded-br-md px-2 py-1 bg-lime-500 hover:bg-lime-600 text-zinc-50">
                APPLY
              </button>
            </span>
            <div className="text-xl">
              <span className="font-medium text-zinc-800">Total =</span>{" "}
              <span className="font-semibold text-lime-500">
                &#8358;{Intl.NumberFormat("en-US").format(total)}
              </span>
            </div>
          </div>

          <div className="w-100 text-center mt-5">
            <button
              onClick={() => setIsCart(false)}
              className=" w-full hover:bg-lime-600 bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto my-5  rounded lg:text-sm font-bold "
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      ) : (
        <h2 className="text-red-400 text-center font-semibold text-2xl mt-10 mb-24">
          <span>You Cart Is Empty </span> .
          <div className="w-56 h-56 relative mx-auto mt-5 rounded-full p-20">
            <Image
              src={emptyCart}
              layout="fill"
              objectFit="cover"
              alt="empty cart image"
              priority
            />
          </div>
        </h2>
      )}
    </>
  ) : (
    <Checkout setIsCart={setIsCart} cart={cart} total={total} />
  );
}

export default Cart;
