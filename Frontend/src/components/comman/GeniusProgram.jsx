import React from "react";
import { useState } from "react";
import "./GeniusProgram.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal.jsx";
import PopupButton from "../premium/PopupButton.jsx";
import { premiumProgram } from "../../assets/Lists/premiumProgram.js";

function GeniusProgram() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="product-and-cost" id="product-and-cost">
      <h1>UpTodd™ Genius Premium Program</h1>
      <h5>Exclusive Parenting Program for Overall Baby Brain Development</h5>
      <h5>
        Exclusive Mega KIT + World's only True Personalised APP + Brain dev.
        Report & Support from World's Top Experts
      </h5>

      <div className="product-pointers">
        <h3>
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          Dedicated R&D Team Care
        </h3>
        <h3>
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          Research Backed Growth System
        </h3>
        <h3>
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          Personalised Organic Mega Kit
        </h3>
        <h3>
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          One-Stop Personalised APP
        </h3>
        <h3>
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          Holistic Tracking & Brain Reports
        </h3>
        <h3>
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          Recognitions & Certifications
        </h3>
      </div>

      <div className="product-and-cost-container-card">
        {premiumProgram.map((card, index) => (
          <div key={index} className="product-and-cost-card">
            <h1>{card.text1}</h1>
            <h2>{card.text2} </h2>
            <p>{card.text3} </p>
            <div className="card-perMonth">
              <span>{card.perMonth}</span>
            </div>
            <h3>{card.discountPrice}</h3>
            <del>{card.deletePrice} </del>

            <PopupButton text="Enroll Now" />
          </div>
        ))}
      </div>

      <div className="see-more-product">
        <p>
          Want to know more about program &nbsp;
          <span
            id="premiumScreenViewDetailedProgramDetails"
            onClick={openModal}
            style={{ color: "#ff5766" }}
          >
            see here
          </span>
        </p>
        <Modal show={showModal} onClose={closeModal}></Modal>
      </div>

      <div className="developmental-kit">
        <div className="kit-intro">
          <div>
            <h3>Curated Just for You: Mega Kit at Your Doorstep</h3>
            <p>World's only true personalised system</p>
          </div>
          <img
            src="https://www.uptodd.com/images/newWebsite/kit-shipment.svg"
            loading="lazy"
            alt="Personalised Baby Kit"
          />
        </div>

        <div className="kit-video">
          <iframe
            loading="lazy"
            srcDoc={`<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover}</style> <a href='https://www.youtube.com/embed/r1SwlfmvuCM?autoplay=1&modestbranding=1&autohide=1&rel=0' class='full'><img src='https://www.uptodd.com/images/newWebsite/kit-video.webp' class='full' /><svg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46' fill='none' style='position: relative; left:2%;top:35%;'><mask id='mask0_303_1345' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='46' height='46'><rect width='45.9356' height='45.9356' fill='#D9D9D9'/></mask><g mask='url(#mask0_303_1345)'><path d='M18.1828 31.5807L31.5807 22.9677L18.1828 14.3548L18.1828 31.5807ZM22.9677 42.1076C20.32 42.1076 17.8319 41.6051 15.5032 40.6003C13.1745 39.5955 11.1489 38.2318 9.42628 36.5092C7.7037 34.7866 6.33999 32.7609 5.33514 30.4323C4.3303 28.1036 3.82788 25.6154 3.82788 22.9677C3.82788 20.32 4.3303 17.8319 5.33514 15.5032C6.33999 13.1745 7.7037 11.1489 9.42628 9.42628C11.1489 7.7037 13.1745 6.33999 15.5032 5.33514C17.8319 4.3303 20.32 3.82788 22.9677 3.82788C25.6154 3.82788 28.1036 4.3303 30.4323 5.33514C32.7609 6.33999 34.7866 7.7037 36.5092 9.42628C38.2318 11.1489 39.5955 13.1745 40.6003 15.5032C41.6051 17.8319 42.1076 20.32 42.1076 22.9677C42.1076 25.6154 41.6051 28.1036 40.6003 30.4323C39.5955 32.7609 38.2318 34.7866 36.5092 36.5092C34.7866 38.2318 32.7609 39.5955 30.4323 40.6003C28.1036 41.6051 25.6154 42.1076 22.9677 42.1076Z' fill='white'/></g></svg> </a>`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="72071507"
          ></iframe>
          <h3>SAMPLE Personalised KIT</h3>
        </div>
      </div>
    </section>
  );
}

export default GeniusProgram;
