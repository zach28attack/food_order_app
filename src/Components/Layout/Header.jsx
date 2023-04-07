import React, {Fragment} from "react";
import BuffetImage from "../../assets/buffet2.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton.jsx";
const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={BuffetImage} alt="buffet table" />
      </div>
    </Fragment>
  );
};

export default Header;
