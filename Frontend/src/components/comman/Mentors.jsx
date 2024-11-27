import React, { useEffect, useRef } from "react";
import "./Mentors.css";
import { superMentors } from "../../assets/data/superMentors.js";

function Mentors() {
  const mentorsListRef = useRef(null);

  useEffect(() => {
    // Check if screen width is 768px or less (mobile view)
    const isMobile = window.matchMedia("(max-width: 768px)");
    let scrollInterval;

    // Apply auto-scroll only if in mobile view
    const applyScrollEffect = () => {
      if (isMobile.matches) {
        scrollInterval = setInterval(() => {
          if (mentorsListRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = mentorsListRef.current;

            // Scroll the container horizontally
            mentorsListRef.current.scrollLeft += 1;

            // Check if the scroll has reached the end
            if (scrollLeft + clientWidth >= scrollWidth - 1) {
              // Reset to the beginning
              mentorsListRef.current.scrollLeft = 0;
            }
          }
        }, 20);
      }
    };

    applyScrollEffect();

    // Clean up interval on component unmount or when screen size changes
    isMobile.addEventListener("change", applyScrollEffect);
    return () => {
      clearInterval(scrollInterval);
      isMobile.removeEventListener("change", applyScrollEffect);
    };
  }, []);

  return (
    <div className="super-mentors">
      <h1>
        Meet our Mentors & Curators |<span> 100+ Curators R&D Team</span>
      </h1>
      <div className="mentors-list" ref={mentorsListRef}>
        {superMentors.map((data) => (
          <div key={data.id} className="super-mentors-card">
            <img src={data.image} alt={data.alt} />
            <h3>{data.name}</h3>
            <h5>{data.prof}</h5>
          </div>
        ))}
      </div>

      <h1>UpTodd™ has been Featured In</h1>
      <div className="super-featured">
        <img
          src="https://www.uptodd.com/images/newWebsite/featured-in.webp"
          loading="lazy"
          alt="Media Houses Featuring UpTodd"
        />
      </div>
    </div>
  );
}

export default Mentors;
