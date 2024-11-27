import { useRef } from "react";
import { happyParent } from "../../assets/data/happyParent.js";
import "./HappyParents.css";
import PopupButton from "../premium/PopupButton.jsx";

function HappyParents() {
  const happyParentRef = useRef(null);

  const handleHappyParentPrev = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".super-happy-parents-card"
      ).offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      happyParentRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleHappyParentNext = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".super-happy-parents-card"
      ).offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      happyParentRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="super-happy-parents">
        <h1>
          Happy Parents, Thriving Tots:
          <span> Celebrating Their Child's Journey</span>
        </h1>
        <h4>
          A Comprehensive Personalized Solution | Secure Your Child’s Future
          with Smart Investments
        </h4>
        <div className="super-happy-parents-wrapper">
          <button
            className="super-happy-parents-button prev"
            onClick={handleHappyParentPrev}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
            />
          </button>

          <div className="super-happy-parents-cards" ref={happyParentRef}>
            {happyParent.map((data) => (
              <div key={data.id} className="super-happy-parents-card">
                <div className="super-peek-iframe-container">
                  <iframe
                    loading="lazy"
                    srcDoc={data.surdoc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                    data-gtm-yt-inspected-4="true"
                    data-gtm-yt-inspected-40611628_62="true"
                    id="72071507"
                    data-gtm-yt-inspected-14="true"
                  ></iframe>
                </div>

                <div className="super-happy-parent-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    alt="Quote"
                    className="quote-mark"
                  />
                  <p>{data.content}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="super-happy-parents-button next"
            onClick={handleHappyParentNext}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>

      {/* Child's Development Section */}
      <div className="child-development-button">
        <PopupButton text="Fuel Your Child's Development" />
      </div>
    </>
  );
}

export default HappyParents;
