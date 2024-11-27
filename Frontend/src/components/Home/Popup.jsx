import React from "react";
import "./Popup.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popup = ({ srcDoc, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          loading="lazy"
          style={{ borderRadius: "10px", margin: ".1rem" }}
          src={srcDoc}
          title="YouTube video player"
          frameBorder="0"
          width={"900px"}
          height={"500px"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={onClose} />
      </div>
    </div>
  );
};

export default Popup;