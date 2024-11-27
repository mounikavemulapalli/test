import React from "react";
import { useState } from "react";
import "./Premium.css";
import Faq from "../Faq.jsx";
import Popup from "./Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Step from "./Step";
import PopupButton from "./PopupButton.jsx";
import Slider from "../comman/Slider.jsx";
import Peek from "../comman/Peek.jsx";
import BrilliantMind from "../comman/BrilliantMinds.jsx";
import Line from "../comman/Line.jsx";
import HappyParents from "../comman/HappyParents.jsx";
import GlobalExperts from "../comman/GlobalExperts.jsx";
import SuperScience from "../comman/SuperScience.jsx";
import GeniusProgram from "../comman/GeniusProgram.jsx";
import Mentors from "../comman/Mentors.jsx";

export const Footer = () => (
  <section className="plain-footer">
    <h1>About Uptodd</h1>
    <p>
      At UpTodd, our approach is built on insights from more than 10,000
      research studies and shaped by experts from renowned institutions like
      MIT, Stanford, IITs, and AIIMS. Our program combines globally recognized
      methods, including Glenn Doman's early stimulation, Montessori's focus on
      independence, Howard Gardner’s multiple intelligences from Harvard, the
      Waldorf holistic approach, and the creativity-driven Reggio Emilia
      approach, as well as principles of indigenous and mindful parenting. This
      well-rounded, evidence-based framework supports babies around the world in
      unlocking their full potential.
    </p>
    <h5>
      "Embark on this inspiring journey with us, where each child shines
      uniquely, and every family’s dreams hold meaning. Supporting children
      globally to flourish and achieve their potential through proven guidance."
      <span>Your's UpTodd Family</span>
    </h5>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1361"
      height="2"
      viewBox="0 0 1361 2"
      fill="none"
    >
      <path d="M0 1H1361" stroke="#492EB4" strokeWidth="0.5"></path>
    </svg>
    <div className="plain-footer-bottom">
      <h3>Copyright UpTodd Care Pvt ltd © 2024. All Rights Reserved</h3>
      <h3>
        Made with Love <b>❤</b>
      </h3>
    </div>
  </section>
);

function Premium() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      {/* Banner */}
      <section className="uptodd-banner">
        <div className="banner-container">
          {/* Mobile Image */}
          <div className="image-banner-part-mobile">
            <img
              src="https://www.uptodd.com/images/newWebsite/personalised-program-banner-image.webp"
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "/images/newWebsite/personalised-program-banner-image.png";
              }}
              alt="Brain Development Journey"
            />
          </div>

          {/* Text Banner */}
          <div className="text-banner-part">
            <h1>Give your baby the best start</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Baby's Strong Developmental Journey (0-4.5 yrs)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                One Stop solution for baby's holistic Growth
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Expert-crafted one stop personalised program
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                Starts at INR 1190* per month only
              </li>
            </ul>
            <div className="btn-start">
              <PopupButton className="a-btn btn-start" text="Schedule a Demo" />
            </div>
          </div>

          {/* Desktop Image */}
          <div className="image-banner-part">
            <img
              src="https://www.uptodd.com/images/newWebsite/personalised-program-banner-image.webp"
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "/images/newWebsite/personalised-program-banner-image.png";
              }}
              alt="Brain Development Journey"
            />
          </div>
        </div>
      </section>

      {/* Program curated by Medical experts, Researchers, & IITians */}
      <Slider />

      {/* The Proof is in the Play: Watch How Babies Thrive! */}
      <Peek />

      {/* How our Program Works !! */}
      <Step />
      <div className="btn-center">
        <PopupButton text="Access this program" />
      </div>

      {/* Why UpTodd? The UpTodd Difference */}
      {/* section-1 */}
      <section className="why-uptodd" id="why-uptodd">
        <h1>Why UpTodd? The UpTodd Advantage</h1>
        <h5>
          Loved by over 150,000 parents in 150+ countries! Recognized with 100+
          international and 200+ national awards, endorsed by experts, and
          featured on leading platforms.
        </h5>
        <div className="why-uptodd-usps">
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-1.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-1.png";
              }}
              loading="lazy"
              alt="Personalized Program"
            />
            <div>
              <h3>Personalized Just for Your Child</h3>
              <p>
                Every child is unique. We nurture their special talents with
                science-backed, personalized growth plans that adapt as they
                grow.
              </p>
            </div>
          </div>
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-2.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-2.png";
              }}
              loading="lazy"
              alt="Brain Boost"
            />
            <div>
              <h3>Boost Their Brain with Play</h3>
              <p>
                All-in-One Development Kit: Organic toys, fun activities, and
                more—all tailored to support your child’s learning and growth.
              </p>
            </div>
          </div>
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-3.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-3.png";
              }}
              loading="lazy"
              alt="Parenting Made Simple"
            />
            <div>
              <h3>Everything You Need in One App</h3>
              <p>
                From brain-boosting activities to nutrition tips—get expert
                advice and tools for your toddler’s daily needs.
              </p>
            </div>
          </div>
          <div className="usp-card">
            <img
              src="https://www.uptodd.com/images/newWebsite/why-uptodd/why-uptodd-4.webp"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/newWebsite/why-uptodd/why-uptodd-4.png";
              }}
              loading="lazy"
              alt="Expert Guidance"
            />
            <div>
              <h3>Guided by Experts, Powered by Science</h3>
              <p>
                10,000+ studies and insights from top experts to support your
                child’s growth and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banne-2 */}
      <section>
        <div className="start-now-banner">
          <h3 className="h3-heading">
            Imagine the endless possibilities for your child! Discover
            personalized development that enhances brain connections and lays a
            strong foundation for their future growth and success.
          </h3>

          {/* Popup Logic */}
          <div className="text-black" style={{ minWidth: "10rem" }}>
            <PopupButton text="Start Now" />
          </div>
        </div>
      </section>

      {/* Brilliant Minds: Celebrating Global Baby Champions */}
      <BrilliantMind />

      {/* Line Section */}
      <Line />

      {/* Happy Parents, Thriving Tots:Witnessing Their Child's Growth */}
      <HappyParents />

      {/* Recommended by Top Global Experts */}
      <GlobalExperts />

      {/* Science-Backed Approach: Rooted in Research */}
      <SuperScience />

      {/* UpTodd™ Genius Premium Program */}
      <GeniusProgram />

      {/* Your Child’s Peronalized Journey begins here: From enrollment to Thriving */}
      <section className="personalise-journey">
        <h1>
          Your Child’s Personalized Journey begins here:
          <span>From enrollment to Thriving</span>
        </h1>
        <div className="journey-step-list">
          <div className="journey-card">
            <h3>
              Personalized for Every Brain:
              <br />
              <span>Adaptive App based on development Reports</span>
            </h3>
            <svg
              className="right-pointing-arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle cx="28" cy="28" r="28" fill="#F5EAE2"></circle>
              <mask
                id="mask0_328_58"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="4"
                y="4"
                width="48"
                height="48"
              >
                <rect
                  x="4"
                  y="4"
                  width="47.6733"
                  height="47.6733"
                  fill="#D9D9D9"
                ></rect>
              </mask>
              <g mask="url(#mask0_328_58)">
                <path
                  d="M27.8367 35.0754L35.0755 27.8366L27.8367 20.5978L25.7625 22.672L29.4374 26.3469H20.3878V29.3263H29.4374L25.7625 33.0012L27.8367 35.0754ZM27.84 46.7072C25.2301 46.7072 22.7768 46.212 20.4803 45.2214C18.1837 44.2309 16.186 42.8866 14.4872 41.1886C12.7884 39.4905 11.4435 37.4937 10.4525 35.1982C9.46155 32.9026 8.96606 30.4499 8.96606 27.8399C8.96606 25.2299 9.46134 22.7767 10.4519 20.4801C11.4424 18.1836 12.7867 16.1859 14.4848 14.4871C16.1828 12.7883 18.1796 11.4434 20.4752 10.4524C22.7707 9.46143 25.2234 8.96594 27.8334 8.96594C30.4434 8.96594 32.8966 9.46122 35.1932 10.4518C37.4897 11.4423 39.4874 12.7866 41.1862 14.4846C42.885 16.1827 44.2299 18.1795 45.2209 20.475C46.2119 22.7705 46.7074 25.2233 46.7074 27.8333C46.7074 30.4432 46.2121 32.8965 45.2215 35.193C44.231 37.4896 42.8867 39.4873 41.1887 41.1861C39.4906 42.8849 37.4938 44.2298 35.1983 45.2208C32.9028 46.2118 30.45 46.7072 27.84 46.7072Z"
                  fill="#002863"
                ></path>
              </g>
            </svg>
          </div>

          {/* Second Card  */}
          <div className="journey-card">
            <h3>
              Unlocking Potential Together:
              <br />
              <span>
                Your 1-1 R&amp;D Consultation and Constant Extensive Support
              </span>
            </h3>
            <svg
              className="right-pointing-arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <circle cx="28" cy="28" r="28" fill="#F5EAE2"></circle>
              <mask
                id="mask0_328_58"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="4"
                y="4"
                width="48"
                height="48"
              >
                <rect
                  x="4"
                  y="4"
                  width="47.6733"
                  height="47.6733"
                  fill="#D9D9D9"
                ></rect>
              </mask>
              <g mask="url(#mask0_328_58)">
                <path
                  d="M27.8367 35.0754L35.0755 27.8366L27.8367 20.5978L25.7625 22.672L29.4374 26.3469H20.3878V29.3263H29.4374L25.7625 33.0012L27.8367 35.0754ZM27.84 46.7072C25.2301 46.7072 22.7768 46.212 20.4803 45.2214C18.1837 44.2309 16.186 42.8866 14.4872 41.1886C12.7884 39.4905 11.4435 37.4937 10.4525 35.1982C9.46155 32.9026 8.96606 30.4499 8.96606 27.8399C8.96606 25.2299 9.46134 22.7767 10.4519 20.4801C11.4424 18.1836 12.7867 16.1859 14.4848 14.4871C16.1828 12.7883 18.1796 11.4434 20.4752 10.4524C22.7707 9.46143 25.2234 8.96594 27.8334 8.96594C30.4434 8.96594 32.8966 9.46122 35.1932 10.4518C37.4897 11.4423 39.4874 12.7866 41.1862 14.4846C42.885 16.1827 44.2299 18.1795 45.2209 20.475C46.2119 22.7705 46.7074 25.2233 46.7074 27.8333C46.7074 30.4432 46.2121 32.8965 45.2215 35.193C44.231 37.4896 42.8867 39.4873 41.1887 41.1861C39.4906 42.8849 37.4938 44.2298 35.1983 45.2208C32.9028 46.2118 30.45 46.7072 27.84 46.7072Z"
                  fill="#002863"
                ></path>
              </g>
            </svg>
          </div>

          {/* Third Card  */}
          <div className="journey-card">
            <h3>
              Thriving Beyond Limits:
              <br />
              <span>Develop Core Skills to Excel in Academics</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Meet our Mentors & Curators | 100+ Curators R&D Team */}
      <Mentors />

      {/* Your Frequently Asked Questions */}
      <Faq />

      {/* Footer */}
      <Footer />

      {/* Popup Logic */}
      {isPopupOpen && <Popup closePopup={handleOpenPopup} />}
    </>
  );
}

export default Premium;
