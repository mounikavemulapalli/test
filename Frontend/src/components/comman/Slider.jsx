import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(0); // Start with the first slide (index 0)

  // Slider settings without responsive behavior
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true, // Enable center mode
    centerPadding: "10px",
    slidesToShow: 5, // Always show 5 slides
    slidesToScroll: 1, // Scroll one at a time for better control
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next); // Update current slide index
    },
  };

  const institutions = [
    {
      src: "https://www.uptodd.com/images/newWebsite/institutions/aiims.webp",
      alt: "AIIMS",
      name: "AIIMS",
    },
    {
      src: "https://www.uptodd.com/images/newWebsite/institutions/iitbhu.webp",
      alt: "IIT BHU",
      name: "IIT BHU",
    },
    {
      src: "https://www.uptodd.com/images/newWebsite/institutions/stanford.webp",
      alt: "Stanford",
      name: "Stanford",
    },
    {
      src: "https://www.uptodd.com/images/newWebsite/institutions/mit.webp",
      alt: "MIT",
      name: "MIT (USA)",
    },
    {
      src: "https://www.uptodd.com/images/newWebsite/institutions/iitkgp.webp",
      alt: "IIT KGP",
      name: "IIT KGP",
    },
  ];

  const objective = [
    {
      id: 0,
      image: "https://www.uptodd.com/images/newWebsite/zero-screen-time.svg",
      name: "Zero Screen Time",
    },
    {
      id: 1,
      image: "https://www.uptodd.com/images/newWebsite/loved-by-babies.svg",
      name: "Loved by Babies",
    },
    {
      id: 2,
      image: "https://www.uptodd.com/images/newWebsite/daily-plans.svg",
      name: "Daily Plans in 10 mins",
    },
    {
      id: 3,
      image: "https://www.uptodd.com/images/newWebsite/creative-activities.svg",
      name: "Creative Activities",
    },
    {
      id: 4,
      image: "https://www.uptodd.com/images/newWebsite/customised-plans.svg",
      name: "Customised Plans",
    },
  ];

  // Get the index of the slide that is exactly in the center
  const getCenterIndex = () => {
    // Get the middle slide of the visible slides (center index for the 5 visible slides)
    const middleVisibleIndex = Math.floor(settings.slidesToShow / 3);

    // Return the correct center slide index considering the total number of slides
    return (currentSlide + middleVisibleIndex) % institutions.length;
  };

  return (
    <>
      <div className="slider-container">
        <h1>
          Program curated by
          <span> Medical experts, Researchers, & IITians</span>
        </h1>
        <Slider {...settings}>
          {institutions.map((inst, index) => (
            <div
              key={index}
              className={`slide-item ${
                getCenterIndex() === index ? "middle-image" : ""
              }`}
            >
              <img
                src={inst.src}
                alt={inst.alt}
                className={`slider-image ${
                  getCenterIndex() === index ? "active" : ""
                }`}
              />
              {/* Show name only for the center image */}
              {getCenterIndex() === index && (
                <h2 className="image-name">{inst.name}</h2>
              )}
            </div>
          ))}
        </Slider>

        <hr />
      </div>

      <div className="super-objective-cards">
        {objective.map((data) => (
          <div key={data.id} className="super-objective-card">
            <img src={data.image} alt="Super Objective Images" />
            <h5>{data.name}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default SliderComponent;
