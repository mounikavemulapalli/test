import { useState, useEffect, useRef } from "react";
import "./SuperDailyProgram.css";
import banner from "../../assets/images/super-daily-program-banner.webp";
import Slider from "../comman/Slider.jsx";
import Peek from "../comman/Peek.jsx";
import BrilliantMinds from "../comman/BrilliantMinds.jsx";
import Line from "../comman/Line.jsx";
import HappyParents from "../comman/HappyParents.jsx";
import GlobalExperts from "../comman/GlobalExperts.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { superOffers } from "../../assets/data/superOffers.js";
import Mentors from "../comman/Mentors.jsx";
import SuperScience from "../comman/SuperScience.jsx";
import SuperBanner from "./SuperBanner.jsx";
import SuperFramework from "./SuperFramework.jsx";
import SuperQA from "./SuperQA.jsx";
import { Footer } from "../premium/Premium.jsx";

function SuperDailyProgram() {
  const componentRef = useRef(null);

  const superDailyFramework = () => {
    componentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [date, setDate] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();

      // Formatting the date as "Thursday, October 03, 2024"
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
      };
      const formattedDate = now.toLocaleDateString("en-US", options);

      // Calculating time left until the end of the day
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
      );
      const timeDifference = endOfDay - now; // difference in milliseconds

      const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutesLeft = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDate(formattedDate);
      setTimeLeft({
        hours: String(hoursLeft).padStart(2, "0"),
        minutes: String(minutesLeft).padStart(2, "0"),
        seconds: String(secondsLeft).padStart(2, "0"),
      });
    };

    // Get current date and time once component is rendered
    getCurrentDateTime();

    // Update every second
    const intervalId = setInterval(getCurrentDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="super-container">
      {/* Header Section */}
      <SuperBanner />

      {/* Main Section */}
      <div className="super-main">
        <div className="super-main-content">
          <h1>
            Super Daily <span>Program</span>
          </h1>
          <p>Activities for Brain Development Without Screens & So Much More</p>
          <ul>
            <li>Illuminate Your Baby’s Future to Its Fullest Potential</li>
            <li>Unleash the Hidden Genius Within Your Child</li>
          </ul>
          <h4>
            <FontAwesomeIcon icon={faShoePrints} /> For 0-5 years old baby
          </h4>
          <button onClick={superDailyFramework}>Program Features</button>
        </div>
        <div className="super-main-image">
          <img src={banner} alt="Banner Image" />
        </div>
      </div>

      {/* CountDown Section */}
      <div className="super-countdown">
        <div className="super-countdown-date">
          <h2>Hurry! Registrations - Closing : {date}</h2>
        </div>
        <div className="super-countdown-time">
          <span>{timeLeft.hours} h</span>
          <span>{timeLeft.minutes} m</span>
          <span>{timeLeft.seconds} s</span>
        </div>
      </div>

      {/* Program Section */}
      <Slider />

      {/* Peek-A-Boo! See the Joy of Development */}
      <Peek />

      {/* What UpTodd Offers Your Baby: */}
      <div className="super-offers">
        <h1>What UpTodd Offers Your Baby:</h1>
        <h5>Empower Your Parenting Journey</h5>
        <div className="super-offers-cards">
          {superOffers.map((data) => (
            <div key={data.id} className="super-offers-card">
              {data.id != superOffers.length - 1 ? (
                <>
                  <div className="super-offers-card-image">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="super-offers-card-content">
                    <h2>{data.name}</h2>
                    <h6>{data.point1}</h6>
                    <h6>{data.point2}</h6>
                  </div>
                </>
              ) : (
                <>
                  <div className="super-offers-card-lastDiv">
                    <h2>{data.name}</h2>
                    <button onClick={superDailyFramework}>
                      Empower Your Parenting Journey
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Brilliant Minds Section */}
      <BrilliantMinds />

      {/* Line Section */}
      <Line />

      {/* Happy Parents Section */}
      <HappyParents />

      {/* Top Global Experts Section */}
      <GlobalExperts />

      {/* Science-Backed Approach Section */}
      <SuperScience />

      {/* Super Daily Framework */}
      <div ref={componentRef}>
        <SuperFramework />
      </div>

      {/* Mentors Section */}
      <Mentors />

      {/* Question Answer Section */}
      <SuperQA />

      {/* About Section */}
      <Footer />
    </div>
  );
}

export default SuperDailyProgram;
