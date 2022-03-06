import React, { useState } from "react";
import { BiX } from "react-icons/bi";

function Modal({ closeModal, isOpen, children }) {
  return (
    <>
      {isOpen ? (
        <>
          <section className=" z-50 inset-0 backdrop-blur-sm bg-[#0000006e] fixed w-full h-full overflow-hidden flex items-center justify-center">
            <div className="container max-w-[600px] bg-white mx-5  px-6 py-4 rounded-lg relative">
              <span
                onClick={closeModal}
                className="absolute right-3 top-3 cursor-pointer"
              >
                <BiX className="text-3xl" />
              </span>
              {/* <span className="">
              <BiX />
            </span> */}
              {children}
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
