
import { useState } from "react";
import quoteSvg from "../../assets/images/successstory/symbols/quote.svg";
import "./AllHappyPatents.css";
import { cards } from "../../assets/data/successData";
import Popup from "./Popup";

const BabyAchieversAll = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const handleCardClick = (card) => {
    setSelectedReview(card); // Set the entire card object as selected review
  };

  const closePopup = () => {
    setSelectedReview(null); // Close the popup
  };
  return (
    <section className="happy-parents-all">
      <h1>
        The Proof is in the Play: <span>Watch How Babies Thrive!</span>
      </h1>
      <h5>
        Busy Parents, Smart Choice: Invest 10 Mins a day to a Brighter Tomorrow
      </h5>
      <div className="happy-parent-list-all">
        {cards.map((card) => (
          <div
            key={card.id} // Ensure this is unique
            className="happy-parents-card-all"
            onClick={() => handleCardClick(card)} // Pass the card object
          >
            <div>
              <iframe
                loading="lazy"
                style={{ borderRadius: "10px", margin: ".1rem" }}
                srcDoc={card.surdoc} // Correctly display the video URL
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="quote-container-all">
            <p className="quote-text-all">{card.title}</p>
            {card.description && <p className="quote-text-all">  {card.description}</p>}
          </div>
          </div>
        ))}
      </div>
      {selectedReview && ( // Render Popup if selectedReview is not null
        <Popup srcDoc={selectedReview.videoUrl} onClose={closePopup} /> // Pass the videoUrl as srcDoc
      )}
    </section>
  );
};

export default BabyAchieversAll;