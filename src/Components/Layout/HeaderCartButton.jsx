import React from "react";
import CardIcon from "../Cart/CartIcon.jsx";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  const buttonClickHandler = () => {
    props.onShowCart();
  };

  return (
    <button className="button" onClick={buttonClickHandler}>
      <span className="icon">
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default HeaderCartButton;
