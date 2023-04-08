import React from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  return <CartContext.provider>{props.children}</CartContext.provider>;
};

export default CartProvider;
