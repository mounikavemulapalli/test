import { useState } from "react";
import "./GlobalExperts.css";
import { doctorReviews } from "../../assets/data/doctorReviews.js";

function GlobalExperts() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Top Global Experts Section */}
      <div className="super-doctor-review">
        <h1>Recommended by Top Global Experts</h1>
        <h4>
          Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting Experts
          &amp; Professors
        </h4>

        <div
          className="super-doctor-review-list"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`super-doctor-review-cards ${isHovered ? "paused" : ""}`}
          >
            {doctorReviews.map((data) => (
              <div key={data.id} className="super-doctor-review-card">
                <div className="super-doctor-review-image-part">
                  <img src={data.img} loading="lazy" alt="doctor-review" />
                  <div>
                    <h3>{data.name}</h3>
                    <h6>{data.position} </h6>
                  </div>
                </div>
                <div className="super-doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalExperts;
