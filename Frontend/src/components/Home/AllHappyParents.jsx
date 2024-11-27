import { useState } from "react";
import quoteSvg from "../../assets/images/successstory/symbols/quote.svg";
import "./AllHappyPatents.css";
import { happyParentsReview } from "../../assets/data/successData";
import Popup from "./Popup"; // Import Popup component

const AllHappyParents = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const handleCardClick = (review) => {
    setSelectedReview(review);
  };

  const closePopup = () => {
    setSelectedReview(null);
  };

  const extractUrl = (surdoc) => {
    const regex = /href='([^']+)'/; // Matches the URL inside the href attribute
    const match = surdoc.match(regex);
    return match ? match[1] : null; // Return the matched URL or null if not found
  };

  return (
    <section className="happy-parents-all">
      <h1>
        Happy Parents, Thriving Tots:
        <span> Witnessing Their Child&#39;s Growth</span>
      </h1>
      <h5>
        A One Stop Personalized Solution | Shift Your Baby Investments For
        Strong Future
      </h5>
      <div className="happy-parent-list-all">
        {happyParentsReview.map((review) => (
          <div
            key={review.id}
            className="happy-parents-card-all"
            onClick={() => handleCardClick(review)}
          >
            <div>
              <iframe
                loading="lazy"
                style={{ borderRadius: "10px", margin: ".1rem" }}
                srcdoc={review.surdoc} // Extract URL for the iframe
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="quote-container-all">
              <p className="quote-text-all">{review.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Render Popup if a review is selected */}
      {selectedReview && (
        <Popup srcDoc={extractUrl(selectedReview.surdoc)} onClose={closePopup} />
      )}
    </section>
  );
};

export default AllHappyParents;
