import React, { useEffect } from "react";
import { BiX } from "react-icons/bi";

function Modal({ setIsModal, isModal, children }) {
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      {isModal ? (
        <>
          <section className="  z-50 inset-0 backdrop-blur-lg bg-[#0000006e] fixed w-full h-full overflow-hidden flex items-center justify-center">
            <div className="modal__inner container max-w-[600px] h-fit max-h-[86vh] overflow-y-auto bg-white mx-3  px-6 py-4 rounded-lg relative">
              <div className="sticky top-0 flex justify-end ">
                <BiX
                  className="text-3xl cursor-pointer"
                  onClick={() => setIsModal(false)}
                />
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
