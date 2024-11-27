import React, { useState } from "react";
import Button from "./premiumButton";
import Popup from "./Popup";
import "./PopupButton.css";
const PopupButton = ({ text,className}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
        {/* Correct Button Component */}
        <Button
          className={`a-btn ${className} full-btn`}
          text={text}
          onClick={handleOpenPopup} // Ensure you're handling the click event
        >
          {" "}
          {text}
        </Button>

        {/* Popup Logic */}
        {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
        </>
  );
};

export default PopupButton;
