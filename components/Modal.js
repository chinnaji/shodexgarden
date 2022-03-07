import React, { useState } from "react";
import { BiX } from "react-icons/bi";

function Modal({ setIsModal, isModal, children }) {
  return (
    <>
      {isModal ? (
        <>
          <section className="  z-50 inset-0 backdrop-blur-lg bg-[#0000006e] fixed w-full h-full overflow-hidden flex items-center justify-center">
            <div className="modal__inner container max-w-[600px] h-fit max-h-[86vh] overflow-y-auto bg-white mx-3  px-6 py-4 rounded-lg relative">
              <div
                onClick={() => setIsModal(false)}
                className="sticky top-0 flex justify-end cursor-pointer"
              >
                <BiX className="text-3xl " />
              </div>
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
