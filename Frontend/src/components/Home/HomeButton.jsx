import React from "react";
import '../../Styles/Home.css';
const Button = ({ text }) => {
  return (
    <>
      <button className="Home-button">{text}</button>
    </>
  );
};

export default Button;
