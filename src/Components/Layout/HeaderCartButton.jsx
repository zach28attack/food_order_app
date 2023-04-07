import React from "react";
import CardIcon from "../Cart/CartIcon.jsx";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default HeaderCartButton;
