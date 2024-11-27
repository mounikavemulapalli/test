import React, { useEffect, useState, useRef } from "react";
import "./SubscriptionBox.css";
import babyMain from "../../assets/images/subscription/babyMain.avif";
import babyToy from "../../assets/images/subscription/babyToy.jpg";
import babyKit1 from "../../assets/images/subscription/babyKit1.jpg";
import babyKit2 from "../../assets/images/subscription/babyKit2.jpg";
import YouTube from "react-youtube";
import BrilliantMinds from "../comman/BrilliantMinds";
import Line from "../comman/Line";
import HappyParents from "../comman/HappyParents";
import Mentors from "../comman/Mentors";
import ParentsLove from "./ParentsLove";
import { awardData } from "../../assets/data/awardData";
import { kits } from "../../assets/data/kits";

function SubscriptionBox() {
  const [kitsData, setKitsData] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [ageInMonths, setAgeInMonths] = useState(null);

  const componentRef = useRef(null);

  const subscriptionKits = () => {
    componentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Function to toggle PopUp visibility
  const togglePopUp = () => setShowPopUp(!showPopUp);

  // Get the current year and populate years in the dropdown
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(8), (val, index) => currentYear - index);

  // Function to calculate the baby's age in months
  const calculateAgeInMonths = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-based, so add 1
    const currentYear = currentDate.getFullYear();

    const monthNumber = parseInt(selectedMonth); // Selected month from dropdown
    const yearNumber = parseInt(selectedYear); // Selected year from dropdown

    // Calculate the difference in years and months
    const yearDifference = currentYear - yearNumber;
    const monthDifference = currentMonth - monthNumber;

    // Calculate total age in months
    const totalMonths = yearDifference * 12 + monthDifference;

    return totalMonths;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAgeInMonths();
    setAgeInMonths(age); // Store the calculated age

    // Reset the selected fields
    setSelectedMonth("");
    setSelectedYear("");
    setShowPopUp(false); // Close modal after submission
  };

  useEffect(() => {
    const fetchKitsData = () => {
      try {
        const data = kits.find((kit) => kit.months === `${ageInMonths} months`); // Find the kit by months
        console.log(data);

        setKitsData(data ? [data] : []); // Set data in an array or empty array if not found
      } catch (error) {
        console.error("Error fetching kits data:", error);
      }
    };

    fetchKitsData();
  }, [ageInMonths]);

  const videoOptions = {
    width: "100%",
    height: "300px",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  return (
    <>
      <div className="sub-container">
        {/* Main Section */}
        <div className="sub-mainDiv">
          <div className="sub-mainDiv-img">
            <img src={babyMain} alt="Baby Image" />
          </div>
          <div className="sub-mainDiv-content">
            <h1>Brain Developmental Boxes</h1>
            <hr />
            <h2>Research Backed Toys</h2>
            <button onClick={subscriptionKits}>EXPLORE</button>
          </div>
        </div>

        {/* Kits PopUp Section */}
        <div ref={componentRef} className="sub-kit-popup">
          <h1>Buy Baby's Developmental Kit For Your Baby</h1>
          <img src={babyKit1} alt="Kits Photo" />

          <div>
            {/* Button to open the modal */}
            <button className="pop-select-button" onClick={togglePopUp}>
              Select Kit for your Baby
            </button>

            {/* Modal */}
            {showPopUp && (
              <div className="sub-popUp">
                <div className="sub-popUp-content">
                  <h1>Enter Child's DOB Get Super Developmental Kit Now</h1>
                  <h2>Baby's Month & Year of Birth</h2>

                  {/* Form to select month and year */}
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="month">Month:</label>
                    <select
                      id="month"
                      value={selectedMonth}
                      required
                      onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                      <option value="">Select Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>

                    <label htmlFor="year">Year:</label>
                    <select
                      id="year"
                      value={selectedYear}
                      required
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <br />
                    <br />
                    <button className="popup-submit-button" type="submit">
                      Show My Baby's Kit
                    </button>
                  </form>

                  {/* Cancel Button */}
                  <button onClick={togglePopUp} className="popup-cancel-button">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Kits Section */}
        <h1 className="developmental-kit-heading">
          Your
          <span> {ageInMonths} Months </span>Baby's Developmental Kit
        </h1>

        {kitsData &&
          kitsData.map((kit) => (
            <div key={kit._id} className="sub-kitDiv">
              <div className="sub-kitDiv-img">
                <img src={babyKit2} alt="Baby Image" />
              </div>
              <div className="sub-kitDiv-content">
                <h1>{kit.name}</h1>
                <h2>( For your {ageInMonths} Month's Baby )</h2>
                <ul>
                  {kit.feature.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <h3>Save 19%</h3>
                <h4>
                  Rs. 3,570 <span> Rs. 2,890</span>
                </h4>
                <h5>Get at INR 2,790 on Checkout</h5>
                <h6>Free Shipping | Cash On Delivery(COD) Available</h6>
                <button>Buy Now</button>
                <p>
                  Exclusively crafted in UpTodd's lab, scientifically designed
                  for optimal brain development in babies.
                </p>
              </div>
            </div>
          ))}

        {/* BrilliantMinds Section */}
        <BrilliantMinds />

        {/* Line Section */}
        <Line />

        {/* HappyParents Section */}
        <HappyParents />

        {/* Research Section */}
        <div className="sub-research">
          <div className="sub-research-img">
            <img src={babyToy} alt="Baby Image" />
          </div>
          <div className="sub-research-content">
            <h1>Research Backed Toys</h1>
            <ul>
              <li>Audio-Visual Learning Toys</li>
              <li>Parenting Support Program</li>
              <li>Nutrition & Milestone Planner</li>
            </ul>
            <button onClick={subscriptionKits}>SHOP NOW</button>
          </div>
        </div>

        {/* Stories Section */}
        <h1 className="heading">
          Accessible & Affordable Brain Developmental Boxes
        </h1>
        <div className="sub-stories">
          <div
            className="sub-stories-video"
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <YouTube videoId="hyORo2c9lWs" opts={videoOptions} />
          </div>
          <div className="stories-content">
            <h1>
              Bringing smiles to over 150,000 + parents and creating success
              stories every day.
            </h1>
            <p>
              Premium, research-backed educational toys designed to stimulate
              your baby’s development, enhance neural connections, and support
              healthy brain growth.
            </p>
          </div>
        </div>

        {/* Award Section */}
        <h1 className="heading">Still Not Sure? See our Genius Awardees</h1>

        <div className="sub-award-cards">
          {awardData.map((data) => (
            <div key={data.id} className="sub-award-card">
              <img src={data.image} alt="Baby Image" />
              <h2>{data.name}</h2>
              <h2>{data.age}</h2>
              <p>{data.about}</p>
            </div>
          ))}
        </div>

        {/* Parents Love Section */}
        <ParentsLove />

        {/* Mentors & Featured Section */}
        <Mentors />
      </div>
    </>
  );
}

export default SubscriptionBox;
