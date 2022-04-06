import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import Modal from "./Modal";
import Link from "next/link";
import axios from "axios";
import TicketVerification from "./TicketVerification";
import Spinner from "./Spinner";

function AdminPage({ orders }) {
  const [isModal, setIsModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(false);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [ticketId, setTicketId] = useState("");
  const handleVerifyTicket = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErr(false);
    var toBeSent = {
      method: "post",
      url: `/api/verifyTicket/${ticketId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(toBeSent)
      .then((response) => {
        console.log(response.data);
        // if (response.data.isValid === true) {
        setOrderDetails(response.data);
        setTimeout(() => {
          setIsModal(true);
        }, 500);
        setErr(false);
        setIsLoading(false);
        // }
        // setPaymentRes(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setErr(
          error.toString() == "Error: Request failed with status code 400"
            ? "Ticket Not Found !"
            : "error, contact support"
        );
        setIsLoading(false);
      });
    // setIsModal(true);
  };
  const tableColumns = ["#", "customer", "Date", "status"];
  return (
    <main className=" max-w-[1200px] mx-auto my-5  px-3">
      {/**/}
      <form
        onSubmit={handleVerifyTicket}
        className="max-w-sm mx-auto text-center my-24"
      >
        {/* {ticketId} */}
        <h1 className="text-zinc-700 font-semibold text-xl">
          Verify Ticket Pass
        </h1>
        <input
          type="text"
          className="block border border-zinc-300 bg-zinc-100 text-zinc-700 w-full p-3 rounded mt-5  focus:outline-none"
          placeholder="Ticket Id"
          required
          onInput={(e) => setTicketId(e.target.value)}
          maxLength="11"
          minLength="11"
        />
        {err ? <p className="mt-2 text-red-600 text-center">{err}</p> : null}
        <button className="flex items-center justify-center w-full hover:bg-lime-600 cursor-pointer bg-lime-500 ease-in-out duration-300 text-zinc-50  py-4 mx-auto my-5  rounded  font-bold ">
          {isLoading ? (
            <>
              <Spinner /> Verifying...
            </>
          ) : (
            "Verify"
          )}
        </button>{" "}
      </form>
      {/*  */}

      {/* orders table */}
      <section>
        <h2 className="text-zinc-700 font-semibold text-xl text-center mb-5">
          Orders
        </h2>
        <table className="  text-sm w-full text-zinc-400 bg-white">
          <thead className="bg-zinc-200  py-10">
            <tr>
              {tableColumns.map((column, index) => (
                <th
                  className={` uppercase px-6 text-left py-4 text-sm text-zinc-500 ${
                    index == 3 ? "md:table-cell hidden" : ""
                  }`}
                  key={column}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                className=" my-2 hover:bg-lime-50 border-t-2 cursor-pointer"
                key={order._id}
              >
                <td className="whitespace-nowrap p-2.5">{index + 1}</td>

                {/* <td className="whitespace-nowrap p-2.5">
                  <span className={`py-1 px-2 rounded-full font-bolder `}>
                    {order._id}
                  </span>
                </td> */}
                <td className="whitespace-nowrap p-2.5">
                  <span className={`py-1 px-2 rounded-full font-bolder `}>
                    {order.customerDetails.metadata.name}
                  </span>
                </td>

                <td className="whitespace-nowrap p-2.5 md:table-cell hidden">
                  <span className={`py-1 px-2 rounded-full font-bolder `}>
                    {order.datePurchased.slice(0, 10)}
                  </span>
                </td>
                <td className="whitespace-nowrap p-2.5 flex items-center">
                  {/* {order.regNo} */}
                  <span className="ml-2 text-xs">
                    {/* {order.isValid ? (
                      <span>
                        <BsCheckCircleFill className="text-lime-500 text-xl" />{" "}
                      </span>
                    ) : (
                      <span>
                        <AiFillCloseCircle className="text-red-500 text-xl" />{" "}
                      </span>
                    )} */}
                    {order.isValid ? (
                      <span className="bg-lime-500 text-zinc-50 rounded px-5 py-1">
                        Valid
                        {/* // <BsCheckCircleFill  />{" "} */}
                      </span>
                    ) : (
                      <span className="bg-red-500 text-zinc-50 rounded px-5 py-1">
                        Used
                        {/* // <BsCheckCircleFill  />{" "} */}
                      </span>
                    )}
                  </span>
                </td>
                {/* 
                    <td className="whitespace-nowrap p-2.5">
                      <span className={`py-1 px-2 rounded-full font-bolder `}>
                        {order.zoneId}
                      </span>
                    </td> */}

                {/* <td className="whitespace-nowrap p-2.5  flex  items-center">
                  <span className="py-1 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded cursor-pointer">
                  </span>

                 
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Modal isModal={isModal} setIsModal={setIsModal}>
        <TicketVerification order={orderDetails} setIsModal={setIsModal} />
      </Modal>
    </main>
  );
}

export default AdminPage;
