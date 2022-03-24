import React, { createContext, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = () => {
  const [cart, setCart] = useState([]);
};
// return()
// export default CartContextProvider;
