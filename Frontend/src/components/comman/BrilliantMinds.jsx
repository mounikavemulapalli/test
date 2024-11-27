import { useRef } from "react";
import "./BrilliantMinds.css";
import { babyAwardList } from "../../assets/data/babyAwardList.js";

function BrilliantMinds() {
  const awaredBabyRef = useRef(null);

  const handleAwaredBabyPrev = () => {
    if (awaredBabyRef.current) {
      const cardWidth = awaredBabyRef.current.querySelector(
        ".super-brilliant-minds-card"
      ).offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAwaredBabyNext = () => {
    if (awaredBabyRef.current) {
      const cardWidth = awaredBabyRef.current.querySelector(
        ".super-brilliant-minds-card"
      ).offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Brilliant Minds Section */}
      <div className="super-brilliant-minds">
        <h1>
          Brilliant Minds: <span>Honoring the World's Top Baby Achievers</span>
        </h1>
        <div className="super-brilliant-minds-wrapper">
          <button
            className="super-brilliant-minds-button prev"
            onClick={handleAwaredBabyPrev}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
            />
          </button>

          <div className="super-brilliant-minds-cards" ref={awaredBabyRef}>
            {babyAwardList.map((data) => (
              <div
                key={data.id}
                className="super-brilliant-minds-card"
                ref={awaredBabyRef}
              >
                <div className="super-brilliant-minds-card-image">
                  <img src={data.img} alt="" />
                </div>
                <div className="super-brilliant-minds-card-content">
                  <h3>{data.title} </h3>
                  <p>{data.description} </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="super-brilliant-minds-button next"
            onClick={handleAwaredBabyNext}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default BrilliantMinds;
