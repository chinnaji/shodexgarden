import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineError } from "react-icons/md";
import { BiError } from "react-icons/bi";
import axios from "axios";
function TicketVerification({ order, setIsModal }) {
  // console.log(order);
  const [isTicketUpdated, setIsTicketUpdated] = useState(false);

  const handleTicketUpdate = () => {
    // order.message.ticketId;
    var toBeSent = {
      method: "put",
      url: `/api/updateTickets/${order.message.ticketId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(toBeSent)
      .then((response) => {
        // console.log(response.data);
        if (response.data.message.acknowledged === true) {
          setIsTicketUpdated(true);
        }
        // setPaymentRes(response.data);
      })
      .catch(function (error) {
        // console.log(error);
        // setErr(
        //   error.toString() == "Error: Request failed with status code 400"
        //     ? "Ticket Not Found !"
        //     : "error, contact support"
        // );
      });
    // setIsModal(false);
  };
  return (
    <>
      {isTicketUpdated ? (
        <>
          {" "}
          <BsCheckCircleFill className="text-[5rem] text-lime-500 mx-auto mb-3" />{" "}
          <h1 className="text-xl font-semibold text-center mb-10 mt-5">
            Ticket Updated Successfully
          </h1>
        </>
      ) : (
        <>
          {order.message !== null ? (
            <section className="py-5">
              {order.message.isValid ? (
                <div className="w-fit mx-auto px-5 py-2 bg-lime-500 text-white rounded mb-3">
                  Ticket is Valid
                </div>
              ) : (
                <div className="w-fit mx-auto px-5 py-2 bg-red-600 text-white rounded mb-3">
                  Ticket Has Been Used!
                </div>
              )}
              <ul className="mt-5">
                <li className="flex my-2">
                  <div className="font-semibold">Name - </div>{" "}
                  <span className="ml-2">
                    {order.message.customerDetails.metadata.name}
                  </span>
                </li>
                <li className="flex my-2">
                  <div className="font-semibold">Phone Number - </div>{" "}
                  <span className="ml-2">
                    {order.message.customerDetails.metadata.phone}
                  </span>
                </li>

                <li className="flex my-2">
                  <div className="font-semibold">Email - </div>{" "}
                  <span className="ml-2">
                    {order.message.customerDetails.email}
                  </span>
                </li>
                <li className="flex my-2">
                  <div className="font-semibold">Paystack Reference - </div>{" "}
                  <span className="ml-2">
                    {order.message.customerDetails.reference}
                  </span>
                </li>
                <li className="flex my-2">
                  <div className="font-semibold">Date Purchased - </div>{" "}
                  <span className="ml-2">
                    {order.message.datePurchased.slice(0, 10)}
                  </span>
                </li>
                {order.message.usedOn !== "0" ? (
                  <li className="flex my-2">
                    <div className="font-semibold">Date Used - </div>{" "}
                    <span className="ml-2">
                      {order.message.usedOn.slice(0, 10)}
                    </span>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              <h2 className="text-center font-semibold mt-10 text-lg text-zinc-700 mb-5">
                Items Purchased
              </h2>

              <table className="w-full  md:px-5 mb-10 ">
                <thead>
                  <tr className="border-b">
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>

                <tbody>
                  {order.message.orderItems.map((item) => (
                    <tr key={item._id}>
                      <td className="p-2">{item.title}</td>
                      <td className="p-2">
                        #{Intl.NumberFormat("en-US").format(item.price)}
                      </td>
                      <td className="p-2 font-medium">X{item.quantity}</td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      colSpan="5"
                      className="justify-end mr-10 text-center pt-10  font-semibold "
                    >
                      Total = #
                      {Intl.NumberFormat("en-US").format(order.message.total)}
                    </td>
                  </tr>
                </tbody>
              </table>
              {order.message.isValid ? (
                <div className=" text-center ">
                  <input
                    onClick={handleTicketUpdate}
                    type="submit"
                    value="Mark As Used"
                    className="w-full uppercase hover:bg-lime-600 cursor-pointer bg-lime-500 ease-in-out duration-300 text-zinc-50  py-3 mx-auto   rounded  font-semibold "
                  />
                </div>
              ) : null}
            </section>
          ) : (
            <section className="text-center py-10">
              {order.message === null ? (
                <>
                  {" "}
                  <MdOutlineError className="text-[5rem] text-red-600 mx-auto mb-3" />{" "}
                  <h1 className="text-xl font-semibold text-center">
                    Ticket Not Found
                  </h1>
                </>
              ) : (
                <>
                  {" "}
                  <BiError className="text-[5rem] text-red-600 mx-auto mb-3" />{" "}
                  <h1>{order.message}. Contact Support!</h1>
                </>
              )}
            </section>
          )}
        </>
      )}
    </>
  );
}

export default TicketVerification;
