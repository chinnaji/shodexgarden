import React from "react";

function TicketDetails({ ticket }) {
  return (
    <div>
      <>
        {ticket ? (
          <section className="py-5">
            {ticket.isValid ? (
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
                <div className="font-semibold">Order No. - </div>{" "}
                <span className="ml-2">#{ticket.orderNo}</span>
              </li>
              <li className="flex my-2">
                <div className="font-semibold">Name - </div>{" "}
                <span className="ml-2">
                  {ticket.customerDetails.metadata.name}
                </span>
              </li>
              <li className="flex my-2">
                <div className="font-semibold">Phone Number - </div>{" "}
                <span className="ml-2">
                  {ticket.customerDetails.metadata.phone}
                </span>
              </li>

              <li className="flex my-2">
                <div className="font-semibold">Email - </div>{" "}
                <span className="ml-2">{ticket.customerDetails.email}</span>
              </li>
              <li className="flex my-2">
                <div className="font-semibold">Paystack Reference - </div>{" "}
                <span className="ml-2">{ticket.customerDetails.reference}</span>
              </li>
              <li className="flex my-2">
                <div className="font-semibold">Date Purchased - </div>{" "}
                <span className="ml-2">
                  {ticket.datePurchased.slice(0, 10)}
                </span>
              </li>
              {ticket.usedOn !== "0" ? (
                <li className="flex my-2">
                  <div className="font-semibold">Date Used - </div>{" "}
                  <span className="ml-2">{ticket.usedOn.slice(0, 10)}</span>
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
                {ticket.orderItems.map((item) => (
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
                    Total = #{Intl.NumberFormat("en-US").format(ticket.total)}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        ) : (
          <section className="text-center py-10">
            <>
              {" "}
              <BiError className="text-[5rem] text-red-600 mx-auto mb-3" />{" "}
              <h1>{ticket}. Contact Support!</h1>
            </>
          </section>
        )}
      </>
    </div>
  );
}

export default TicketDetails;
