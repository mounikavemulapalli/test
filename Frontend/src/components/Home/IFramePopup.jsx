import React from 'react';
import "./IFramePopup.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IFramePopup = ({ handleClose, selectedVideo }) => {
  const renderIframe = () => {
    switch (selectedVideo) {
      case 'f-1':
        return (
          <iframe
            width="888"
            height="499"
            src="https://www.youtube.com/embed/uGCAGsA1kc8"
            title="Crawling at 2 Months"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        );
      case 'f-2':
        return (
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/2efUMMC5trc"
            title="5 Month's Baby | Identifying Cards"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        );
      case 'f-3':
        return (
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/OoHhJZafXsU"
            title="18 months Child"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        );
      default:
        return null;
    }
  };

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <FontAwesomeIcon icon={faTimes} className="close" onClick={handleClose} />
        <div className="video-frame">
          {renderIframe()}
        </div>
      </div>
    </div>
  );
};

export default IFramePopup;
