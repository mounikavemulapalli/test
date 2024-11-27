import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./successstory.css";
import {
  happyParentsReview,
  cards,
  awaredBabies,
  doctorReviews,
  sloganImages,
} from "../../assets/data/successData";
import quoteSvg from "../../assets/images/successstory/symbols/quote.svg";
import globe from "../../assets/images/successstory/luminary/globe.svg";
import mood from "../../assets/images/successstory/luminary/mood.svg";
import playlistCheck from "../../assets/images/successstory/luminary/playlist_add_check_circle.svg";
import supervisedUser from "../../assets/images/successstory/luminary/supervised_user_circle.svg";
import sliderPrev from "../../assets/images/successstory/symbols/slider-prev.svg";
import sliderNext from "../../assets/images/successstory/symbols/slider-next.svg";
import IFramePopup from "./IFramePopup";
import Button from "../premium/premiumButton";
import awardeesJson from "../../assets/data/baby-champs.json";

const SuccessStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleDivClick = (videoClass) => {
    setSelectedVideo(videoClass); // Set the specific video based on the class clicked
    setIsOpen(true); // Open the popup
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };

  const carouselRef = useRef(null); // Ref to track carousel container
  const happyParentRef = useRef(null);
  const awaredBabyRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".carousel-card").offsetWidth;
      const gap = 20; // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap; // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".carousel-card").offsetWidth;
      const gap = 20; // Set this to the gap between cards in pixels
      const scrollAmount = cardWidth + gap; // Scroll by the width of one card plus the gap
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleHappyParentPrev = () => {
    if (happyParentRef.current) {
      const cardWidth = happyParentRef.current.querySelector(
        ".happy-parents-card"
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
        ".happy-parents-card"
      ).offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      happyParentRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAwaredBabyNext = () => {
    if (awaredBabyRef.current) {
      const cardWidth =
        awaredBabyRef.current.querySelector(".baby-award-card").offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const handleAwaredBabyPrev = () => {
    if (awaredBabyRef.current) {
      const cardWidth =
        awaredBabyRef.current.querySelector(".baby-award-card").offsetWidth;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      awaredBabyRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  //loop scrolling

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth - 1
        ) {
          // Smoothly reset to the start
          const resetScroll = setInterval(() => {
            scrollContainer.scrollLeft -= 100;
            if (scrollContainer.scrollLeft <= 0) {
              clearInterval(resetScroll);
            }
          }, 1);
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 10);
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    if (!isHovering) {
      startScrolling();
    } else {
      stopScrolling();
    }

    return () => stopScrolling();
  }, [isHovering]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === sloganImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="main">
      <div className="intro">
        <h5>Achievers</h5>
        <h1>Real Stories: Watch Babies Thrive</h1>
      </div>
      <section className="dev-wonder">
        <h1>Joyful Beginnings: Making Early Learning Fun and Engaging</h1>
        <div className="dev-cont">
          <div className="dev-card">
            <div className="bg-sq">
              2 Months & <br /> Crawling!
            </div>
            <div
              className="front-img f-1"
              onClick={() => handleDivClick("f-1")}
            >
              <div className="play-circle"></div>
            </div>
            {isOpen && (
              <IFramePopup
                handleClose={handleClose}
                selectedVideo={selectedVideo}
              />
            )}
          </div>
          <div className="right-circle"></div>
          <div className="down-circle"></div>

          <div className="dev-card">
            <div className="bg-sq">
              10 Months & <br /> Recognising Objects
            </div>
            <div
              className="front-img f-2"
              onClick={() => handleDivClick("f-2")}
            >
              <div className="play-circle"></div>
            </div>
            {isOpen && (
              <IFramePopup
                handleClose={handleClose}
                selectedVideo={selectedVideo}
              />
            )}
          </div>
          <div className="right-circle"></div>
          <div className="down-circle"></div>

          <div className="dev-card">
            <div className="bg-sq">
              18 Months & <br /> Reading Pictures
            </div>
            <div
              className="front-img f-3"
              onClick={() => handleDivClick("f-3")}
            >
              <div className="play-circle"></div>
            </div>
            {isOpen && (
              <IFramePopup
                handleClose={handleClose}
                selectedVideo={selectedVideo}
              />
            )}
          </div>
        </div>
      </section>
      <div className="curlyline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="314"
          height="15"
          viewBox="0 0 314 15"
          fill="none"
        >
          <path
            d="M313 3.33333L302.601 9.73483C292.552 15.9212 279.732 15.2903 270.339 8.14717L269.488 7.49999C259.774 0.113225 246.325 0.113226 236.612 7.49999V7.49999C226.898 14.8868 213.449 14.8868 203.736 7.49999V7.49999C194.022 0.113222 180.573 0.113221 170.86 7.49999V7.49999C161.146 14.8868 147.697 14.8868 137.983 7.49998V7.49998C128.27 0.113216 114.821 0.113215 105.107 7.49998V7.49998C95.3935 14.8867 81.8854 14.8412 72.1715 7.45444V7.45444C62.5281 0.121297 49.1181 0.0760858 39.4747 7.40923V7.40923C29.7195 14.8274 16.1884 14.7325 6.53812 7.17834L0.999997 2.84311"
            stroke="#FF3F4E"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

      <section className="happy-parents">
        <h1>
          Happy Parents, Thriving Tots:{" "}
          <span>Celebrating Their Child's Journey</span>
        </h1>
        <h5>
          A Comprehensive Personalized Solution | Secure Your Child’s Future
          with Smart Investments
        </h5>
        <div className="happy-parent-list-container">
          <div className="happy-parent-list" ref={happyParentRef}>
            {happyParentsReview.map((review) => (
              <div key={review.id} className="happy-parents-card">
                <div>
                  <iframe
                    loading="lazy"
                    srcDoc={review.surdoc}
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
                <div className="quote-container">
                  <img src={quoteSvg} alt="Quote" className="quote-mark" />
                  <p className="quote-text">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            onClick={handleHappyParentNext}
            className="happy-parents-slider-next"
            src={sliderNext}
            alt=""
          />
          <img
            onClick={handleHappyParentPrev}
            className="happy-parents-slider-prev"
            src={sliderPrev}
            alt=""
          />
        </div>
        <div className="see-all-cont">
          <a href="/happy-parents">
            <button className="see-all-btn parents-all-btn">See All</button>
          </a>
        </div>
      </section>

      <section className="luminary">
        <div className="lum-item">
          <img src={globe} alt="" loading="lazy" />
          <h4>
            <span>158</span>
            <br />
            Countries
          </h4>
        </div>
        <div className="lum-item">
          <img src={mood} alt="" loading="lazy" />
          <h4>
            <span>98%</span>
            <br />
            Happiness
          </h4>
        </div>
        <div className="lum-item">
          <img src={playlistCheck} alt="" loading="lazy" />
          <h4>
            <span>107 </span>
            International &
            <br />
            <span>213 </span>
            National Records
          </h4>
        </div>
        <div className="lum-item">
          <img src={supervisedUser} alt="" loading="lazy" />
          <h4>
            <span>1,50,000+</span>
            <br />
            Parents
          </h4>
        </div>
      </section>

      <section className="carousel-container how-baby-thrives genius-babies">
        <h1>
          The Proof is in the Play: <span>Watch How Babies Flourish!</span>
        </h1>
        <h5>
          Busy Parents, Smart Decision: Dedicate 10 Minutes a Day for a Brighter
          Future
        </h5>

        <div className="carousel-wrapper">
          <button className="carousel-button prev" onClick={handlePrev}>
            <img src={sliderPrev} alt="Previous" />
          </button>

          <div className="carousel" ref={carouselRef}>
            {cards.map((card, index) => (
              <div className="carousel-card" key={index}>
                <iframe
                  width="350"
                  height="200"
                  srcDoc={card.surdoc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="quote-container-all">
                  <p className="quote-text-all">{card.title}</p>
                  {card.description && (
                    <p className="quote-text-all"> {card.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={handleNext}>
            <img src={sliderNext} alt="Next" />
          </button>
        </div>
        <div className="see-all-cont child-see-all-cont">
          <a href="/baby-achievers">
            <button
              className="see-all-btn child-all-btn"
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
            >
              See All
            </button>
          </a>
        </div>
      </section>

      <section className="awared-babies">
        <h1>
          Brilliant Minds: <span>Honoring the World's Top Baby Achievers</span>
        </h1>
        <div className="awared-babies-cont">
          <div className="baby-award-list" ref={awaredBabyRef}>
            {awaredBabies.map((baby) => (
              <div key={baby.image} className="baby-award-card">
                <img
                  src={baby.image}
                  alt="Achievement"
                  className="achievement-image"
                />
                <p>
                  {baby.title} <br />
                  <span>{baby.subtitle}</span>
                </p>
              </div>
            ))}
          </div>
          <img
            className="baby-award-slider-next"
            src={sliderNext}
            loading="lazy"
            alt="Next Genius Bbay"
            onClick={handleAwaredBabyNext}
          />
          <img
            className="baby-award-slider-prev"
            src={sliderPrev}
            loading="lazy"
            alt="Prev Genius Baby"
            onClick={handleAwaredBabyPrev}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/baby-champs" style={{ textDecoration: "none" }}>
            <Button text="See All" />
          </Link>
        </div>
      </section>

      <section className="start-now-banner">
        <h3>
          Imagine what your child can achieve! Explore personalized development
          that strengthens neural connections and builds a strong foundation for
          their future.
        </h3>
        <Button text="Start Now" />
      </section>

      <section className="doctor-review">
        <h1>Recommended by Top Global Experts</h1>
        <h5>
          Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting Experts
          &amp; Professors
        </h5>
        <div
          className="doctor-review-list"
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {doctorReviews.map((review) => (
            <div key={review.name} className="doctor-review-card">
              <div className="doctor-review-image-part">
                <img src={review.image} alt="" loading="lazy" />
                <div>
                  <span>{review.name}</span>
                  <h6>{review.qualification}</h6>
                </div>
              </div>
              <div className="doctor-review-quote">
                <img src={quoteSvg} alt="" loading="lazy" />
                <p>{review.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="slogans-card">
        <p>
          Started with passion to create global impact, creating real success
          stories in families across globe
        </p>
        <div className="whatsapp-container">
          <div className="image-slider fade">
            <img src={sloganImages[activeIndex]} alt="" />
          </div>
          <div className="slogan-dots">
            {sloganImages.map((image, index) => (
              <span
                key={index}
                className={`dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const Awardees = () => {
  window.scrollTo(0, 0);
  const [videoModalSrc, setVideoModalSrc] = useState(null);

  return (
    <>
      {videoModalSrc && (
        <div div className="modal">
          <span id="closeYtModalBtn" onClick={() => setVideoModalSrc(null)}>
            ×
          </span>
          <iframe
            allowFullScreen
            src={videoModalSrc}
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture; web-share;"
          ></iframe>
        </div>
      )}
      <section id="baby-champs-container">
        <h1>
          628+ Baby Awardees : <span>Celebrating Global Baby Champions</span>
        </h1>

        {awardeesJson.map((awardee) => {
          return (
            <>
              <div className="baby-champs-card">
                <div className="mobile-top-headings">
                  <h4>{awardee.h4}</h4>
                  <h2>
                    {awardee.h2}
                    <span>{awardee.span}</span>
                  </h2>
                  <p>{awardee.p}</p>
                </div>
                <div className="left-slider">
                  {awardee.sliderImg.map((src) => (
                    <img src={src} />
                  ))}
                </div>
                <div className="right-container">
                  <div>
                    <h4>{awardee.h4}</h4>
                    <h2>
                      {awardee.h2}
                      <span>{awardee.span}</span>
                    </h2>
                    <p>{awardee.p}</p>
                  </div>
                  <div id="thumbnail-container">
                    <div className="video-card">
                      {awardee.img1 && (
                        <>
                          <h3>Genius Baby</h3>
                          <div
                            onClick={() => setVideoModalSrc(awardee.babyVideo)}
                          >
                            <img src="https://www.uptodd.com/images/newWebsite/play_circle.png" />
                            <img src={awardee.img1} />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="video-card">
                      {awardee.img2 && (
                        <>
                          <h3>Super Parent</h3>
                          <div
                            onClick={() => {
                              setVideoModalSrc(awardee.parentVideo);
                            }}
                          >
                            <img src="https://www.uptodd.com/images/newWebsite/play_circle.png" />
                            <img src={awardee.img2} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mobile-thumbnail-container">
                  <div onClick={() => setVideoModalSrc(awardee.babyVideo)}>
                    <img src={awardee.img1} />
                    <div>Genius Baby Video</div>
                  </div>
                  <div onClick={() => setVideoModalSrc(awardee.parentVideo)}>
                    <img src={awardee.img2} />
                    <div>Super Parent Video</div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </>
          );
        })}
      </section>
    </>
  );
};

export default SuccessStory;
