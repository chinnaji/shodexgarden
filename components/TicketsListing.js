import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";

import Image from "next/image";
import Modal from "../components/Modal";
import Cart from "./Cart";
import Checkout from "./Checkout";

function TicketsListing({ ticketItems }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isCart, setIsCart] = useState(true);
  const [total, setTotal] = useState(0);
  let subTotal = 0;

  const [isModal, setIsModal] = useState(false);

  const [cart, setCart] = useState([]);

  const addToCart = (itemId) => {
    setIsAddedToCart(true);
    //   get the item from the item list
    const item = ticketItems.find((ticketItems) => ticketItems.id === itemId);

    // check if the item already exisits
    cart.some((cartItem) => cartItem.id === item.id)
      ? // if it does, increase the quantity
        cart.find((item) => item.id === itemId).quantity++
      : //   if it dosent, just push it
        setCart([...cart, item]);
  };
  cart.map((cartItem) => {
    subTotal += cartItem.quantity * cartItem.price;
  });
  // get cart total
  useEffect(() => {
    setTotal(subTotal);
  }, [subTotal]);
  // console.log(subTotal);
  return (
    <>
      <section className="max-w-[1200px] mx-auto my-5 mb-40  px-3 pt-10">
        <h2 className="text-lime-500 text-center font-semibold text-3xl mb-8">
          Book a Ticket, Come Enjoy Yourself!{" "}
        </h2>
        <div className="w-fit bg-amber-500 rounded-xl flex items-center px-3 text-white py-2 flex-row ml-4">
          <FiShoppingCart className="mx-2" />{" "}
          <span className="mr-1 font-semibold text-sm">Cart</span>
          <span className="text-xs mx-2 w-5 h-5 flex items-center justify-center text-grey-500 bg-white rounded-full">
            {cart.length}
          </span>
        </div>

        <div className="flex w-full flex-wrap ">
          {ticketItems.map((ticketItem, index) => (
            <div
              className="px-6 rounded-lg h-fit overflow-hidden my-10 md-my-0 w-full sm:w-1/2 md:w-1/2 xl:w-1/4 "
              key={ticketItem.title}
            >
              <div className=" px-2 py-3 rounded-lg">
                <div className="w-full h-48   relative mx-auto ">
                  <Image
                    className="rounded-lg hover:grow hover:shadow-lg"
                    src={ticketItem.image}
                    layout="fill"
                    objectFit="cover"
                    alt={`shodex garden ${ticketItem.title}`}
                    priority={index === 0 ? true : false}
                  />
                </div>

                <h4 className="text-grey-500  font-semibold text-base mt-4 mb-2 mx-2">
                  {ticketItem.title}
                </h4>
                <h4 className="text-lime-500  font-semibold text-2xl mx-2">
                &#8358;
{Intl.NumberFormat("en-US").format(ticketItem.price)}
                </h4>

                {cart.some((cartItem) => cartItem.id === ticketItem.id) ? (
                  <button
                    className=" focus:outline-none   w-full  ease-in-out duration-300  text-lime-500  border-2 border-lime-500 py-3  mt-5   rounded lg:text-sm font-bold "
                  >
                    Added To Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(ticketItem.id)}
                    className=" focus:outline-none  border-0 w-full  ease-in-out duration-300  text-zinc-50 hover:bg-lime-600 bg-lime-500 py-3  mt-8   rounded lg:text-sm font-bold "
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 ? (
          <div className="w-100 text-center">
            <button
              onClick={() => setIsModal(true)}
              className="w-full md:w-fit hover:bg-lime-600 bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 px-24 mx-auto mt-5 mb-32 rounded lg:text-sm font-bold "
            >
              View Cart
            </button>
          </div>
        ) : null}
      </section>

      <Modal isModal={isModal} setIsModal={setIsModal}>
        {isCart ? (
          <Cart cart={cart} setCart={setCart} total={total} />
        ) : (
          <Checkout />
        )}
      </Modal>
    </>
  );
}

export default TicketsListing;
