import { useRef } from "react";
import "/src/components/comman/Peek.css";
import cards from "../../assets/Lists/expertTalksCards.json";

function ExpertTalks() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="super-peek">
      <h1>Expert Talks</h1>
      <h5>
        Busy Parents, Smart Decision: Dedicate 10 Minutes a Day for a Brighter Future
      </h5>
      <div className="super-peek-wrapper">
        <button className="super-peek-button prev" onClick={handlePrev}>
          <img
            src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
            alt="Previous"
          />
        </button>

        <div className="super-peek-cards" ref={carouselRef}>
          {cards.map((card, index) => (
            <div key={index} className="super-peek-card">
              <div className="super-peek-iframe-container">
                <iframe
                  width="320"
                  height="200"
                  srcdoc={card.surdoc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{card.text}</p>
              <p>{card.quoteAuthor}</p>
            </div>
          ))}
        </div>

        <button className="super-peek-button next" onClick={handleNext}>
          <img
            src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
}

export default ExpertTalks;
