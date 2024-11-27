import React from "react";
import { Link } from "react-router-dom";
import "./UnapprovedMsg.css";

const UnapprovedMsg = () => {
  return (
    <div className='unapproved-message-wrapper'>
      <div className='unapproved-message'>
        <p>Sorry, replies to unapproved comments are not allowed</p>
        <Link to='/blog'>« Back</Link>
      </div>
    </div>
  );
};

export default UnapprovedMsg;
