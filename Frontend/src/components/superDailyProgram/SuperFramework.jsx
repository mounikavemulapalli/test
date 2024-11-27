import React from "react";
import "./SuperFramework.css";
import PopupButton from "../premium/PopupButton";

function SuperFramework() {
  return (
    <div className="super-framework">
      <div className="super-framework-info">
        <h4>Product Feature</h4>
        <h1>Super Daily Framework</h1>
        <h3>11 Days Challenge with 1 Month Access</h3>
        <div className="super-framework-info-list">
          <ul>
            <li>Four immersive neural music sessions.</li>
            <li>Screen-free activities tailored for babies.</li>
            <li>Introductory parenting training sessions.</li>
            <li>One live interactive webinar.</li>
            <li>One exclusive Parenting Accelerator Master Live Session.</li>
            <li>Unlimited access to top-tier parenting coaches.</li>
            <li>Real-time tracking of training sessions and activities.</li>
            <li>One milestone report with research-backed suggestions.</li>
          </ul>
        </div>
        <p>Access to the app is provided instantly after payment.</p>
      </div>
      <div className="super-framework-join">
        <div className="super-framework-join1">
          <h4>
            Sign Up Today! Whether your baby is just 1 week, 3 years, or even
            4.5 years old – the earlier you start, the better it is for their
            development!
          </h4>
        </div>
        <div className="super-framework-join2">
          <h3>Super Daily Framework</h3>
          <h4>
            INR 449 <span>INR 1,599</span>
          </h4>

          <div className="super-framework-join2-btn">
            <PopupButton text="Enroll Now" />
          </div>
        </div>
        <p>Mega discount | Exclusive offer</p>
      </div>
    </div>
  );
}

export default SuperFramework;
