import { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Home/HomeButton.jsx";
import Slider from "../comman/Slider.jsx";
import Peek from "../comman/Peek.jsx";
import GeniusProgram from "../comman/GeniusProgram.jsx";
import BrilliantMinds from "../comman/BrilliantMinds.jsx";
import Line from "../comman/Line.jsx";
import HappyParents from "../comman/HappyParents.jsx";
import GlobalExperts from "../comman/GlobalExperts.jsx";
import SuperScience from "../comman/SuperScience.jsx";
import Mentors from "../comman/Mentors.jsx";
import { possibilitesList } from "../../assets/data/possibilitesList.js";
import { pillarsList } from "../../assets/Lists/pillarsList.js";
import { boardMembers } from "../../assets/Lists/boardMembers.js";
import { Faq } from "../Faq.jsx";
import PopupButton from "../premium/PopupButton.jsx";
import homeMainImage from "../../assets/images/home/home_main_image.webp";
import possibilites1 from "../../assets/images/home/possibilites1.webp";
import solutionImage from "../../assets/images/home/solution-image.webp";
import expertPersonalised from "../../assets/images/home/expert-personalised.webp";

export default function Home() {
  const boardMembersRef = useRef(null);

  const handleCardClick = (id) => {
    setClickedCardId(id);
  };

  const handleBoardMenberPrev = () => {
    if (boardMembersRef.current) {
      const boardCard = boardMembersRef.current.querySelector(".board-card");

      if (boardCard) {
        const cardWidth = boardCard.offsetWidth;
        const gap = 30;
        const scrollAmount = cardWidth + gap;

        boardMembersRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleBoardMemberNext = () => {
    if (boardMembersRef.current) {
      const cardWidth =
        boardMembersRef.current.querySelector(".board-card").offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      boardMembersRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const [clickedCardId, setClickedCardId] = useState(pillarsList[0].id);

  return (
    <div>
      {/* Main Section */}
      <div className="home-section">
        <section className="Home-page">
          <div className="banner-text">
            <h1>Ensure the Best Start for Your Baby!</h1>
            <h3>Support Your Baby's Growing Brain</h3>
            <h5>Expert-Guided Personalized Program Tailored for Your Baby</h5>
            <ul>
              <li>
                <FaCheckCircle /> <span>No Pressure, No Testing</span>
              </li>
              <li>
                <FaCheckCircle /> <span>No Screen Time</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Just 10 Minutes a Day</span>
              </li>
              <li>
                <FaCheckCircle /> <span>Loved by Babies</span>
              </li>
              <li>
                <FaCheckCircle /> <span>The Ultimate Parenting Solution</span>
              </li>
            </ul>

            <div>
              <PopupButton text="Book a Demo Slot" />
            </div>
          </div>
          <div className="banner-image">
            <img src={homeMainImage} alt="home Main Image" />
          </div>
        </section>

        {/* Slider Section */}
        <section>
          <Slider />
        </section>

        {/* Explore the Possibilities Section */}
        <section className="Possibilities">
          <div className="Possibilities-heading">
            <h1>Explore the Possibilities with UpTodd</h1>
            <p>
              We've Got Your Back – Top Experts Support You in Your Baby’s Brain
              Development Journey
            </p>
          </div>
          <div className="Possibilities-container">
            <div className="Possibilities-image">
              <img src={possibilites1} alt="possibilites Main Image" />
            </div>
            <div className="Possibilities-list">
              {possibilitesList.map((value, index) => (
                <div key={index} className="Possibilities-card">
                  <img src={value.img} alt="" />
                  <div className="card-text">
                    <h2>{value.heading}</h2>
                    <p>{value.text} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="Solution-page">
          <div className="solution-heading">
            <h1>The Complete Solution for Your Baby's Brightest Future</h1>
            <p>Research-Driven Baby Brain Development Program</p>
          </div>
          <div className="solution-container">
            <ul>
              <li>
                <FaCheckCircle />
                <span>Parenting Made Easy: One App, Everything You Need</span>
              </li>
              <li>
                <FaCheckCircle />
                <span>Holistic Growth & Baby Brain Reports</span>
              </li>
              <li>
                <FaCheckCircle />
                <span>10,000+ Research Studies, 100+ Leading Experts</span>
              </li>
              <li>
                <FaCheckCircle />
                <span>Expert-Customized Mega Toy Developmental Kits </span>
              </li>
            </ul>
            <div className="solution-image">
              <img src={solutionImage} alt="solution Image" />
            </div>
          </div>
        </section>

        {/* Genius Section */}
        <section>
          <div className="genius-section">
            <div className="genius-header">
              <h1>
                Unlocking Your Baby's Genius – Nurturing Brain Development
              </h1>
              <h5>Every Baby is Born with Unlimited Potential</h5>
            </div>
            <div className="genius-container">
              <ul className="genius-text">
                <li>
                  <span>100 Bn</span>
                  <span>Every Baby is Born with 100 Billion Neurons</span>
                </li>
                <li>
                  <span>1 Mn</span>
                  <span>
                    One Million Neural Connections Form Every Second in the
                    Early Years
                  </span>
                </li>
                <li>
                  <span>90%</span>
                  <span>Ninety Percent of Our Brain Develops by Age 5</span>
                </li>
                <li>
                  <span>60%</span>
                  <span>
                    60% of a Baby's Energy is Dedicated to Brain Development
                  </span>
                </li>
              </ul>
              <div className="building">
                <iframe
                  loading="lazy"
                  srcDoc="<style>body,.full {position:relative;margin:0;overflow:hidden;display:flex;justify-content:center;align-content:center}.full img {width:100%;}</style> <div class='full'><a href='https://www.youtube.com/embed/VNNsN9IJkws?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0'> <img src='https://www.uptodd.com/images/newWebsite/inside-baby-genius.webp' /> <svg version='1.1' viewBox='0 0 68 48' width='68px' style='position: absolute; top:50%; left:50%; transform:translate(-50%,-50%)'><path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path><path d='M 45,24 27,14 27,34' fill='#fff'></path></svg> </a></div>"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                  data-gtm-yt-inspected-4="true"
                  data-gtm-yt-inspected-40611628_62="true"
                  id="275573034"
                  data-gtm-yt-inspected-14="true"
                ></iframe>
                <p>Ref. Harvard University | developingchild.harvard.edu</p>
              </div>
            </div>
            <div id="genius-section-btn-container">
              <a href="/research">
                <Button text="Explore the Details" />
              </a>
            </div>
          </div>
        </section>

        {/* Peek-A-Boo Section */}
        <Peek />

        {/* UpTodd Expert Personalised Program Section */}
        <section className="developmental-pillars">
          <div className="development-head">
            <h1>
              UpTodd Expert-Personalized Program
              <br />
              <span>Nurture your baby's genius potential</span>
            </h1>
            <h5>
              A Holistic Approach to Baby Brain Development Across All
              Foundational Pillars – <span>Just 10 Minutes a Day</span>
            </h5>
          </div>
          <div className="development-container">
            <div className="development-lest">
              {pillarsList.map((value) => (
                <div
                  key={value.id}
                  onClick={() => handleCardClick(value.id)}
                  className={`development-card ${
                    clickedCardId === value.id ? "active" : ""
                  }`}
                >
                  <h3>{value.title}</h3>
                  <div className="four-pillars-list" style={{padding: "0.9rem 0rem"}}>
                    <ul>
                      <div>
                        <FaCheckCircle style={{marginRight: ".5rem"}}/>
                        <span>{value.text1} </span>
                      </div>
                      <div>
                      <FaCheckCircle style={{marginRight: ".5rem"}}/>
                        <span>{value.text2}</span>
                      </div>
                      <div>
                      <FaCheckCircle style={{marginRight: ".5rem"}}/>
                        <span>{value.text3}</span>
                      </div>
                      <div>
                      <FaCheckCircle style={{marginRight: ".5rem"}}/>
                        <span>{value.text4}</span>
                      </div>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="development-image">
              <img src={expertPersonalised} alt="Expert Personalised" />
            </div>
          </div>
          <div className="developmental-pillars-footer">
            <a href="/research">
              <Button text="Explore the Details" />
            </a>
            <p>
              Create a Brain-Stimulating Home Environment for Your Baby, with
              the Best Resources on the Planet. We’ve Got Your Back on This
              Journey.
            </p>
          </div>
        </section>

        {/* Banner Section */}
        <section className="start-now-banner">
          <div className="start-now-banner-grid">
            <h3>
              Stop Wasting Money on Generic, Harmful Toys Filled with
              Chlorinated Paraffin {`->`} Toxic to Your Baby’s Brain Growth.
            </h3>
            {/* <Button text='Start Now' /> */}
            <PopupButton text="Start Now" />
          </div>
        </section>

        {/* UpTodd Genius Premium Program Section */}
        <GeniusProgram />

        {/*  Brilliant Minds Section */}
        <BrilliantMinds />

        {/* Line Section */}
        <Line />

        {/* Happy Parents Section */}
        <HappyParents />

        {/* Global Experts Section  */}
        <GlobalExperts />

        {/* Science Section */}
        <SuperScience />

        {/* Mentors Section */}
        <Mentors />

        <section className="board-container happy-parents">
          <h1>Meet our Other Board Members</h1>
          <h5>On a mission to empower 10 Million+ families globally by 2026</h5>
          <div className="board-wrapper">
            <img
              id="boardGridPrevBtn"
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              loading="lazy"
              alt="Previous Board Member"
              onClick={handleBoardMenberPrev}
            />
            <div className="board-grid" ref={boardMembersRef}>
              {boardMembers.map((ele, index) => (
                <div key={index} className="board-card">
                  <img src={ele.img} alt="" />
                  <h3>{ele.name} </h3>
                  <span>{ele.position} </span>
                  <p>{ele.description}</p>
                </div>
              ))}
            </div>
            <img
              id="boardGridNextBtn"
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              loading="lazy"
              onClick={handleBoardMemberNext}
              alt="Next Board Member"
            />
          </div>
        </section>

        <Faq />
      </div>
    </div>
  );
}
