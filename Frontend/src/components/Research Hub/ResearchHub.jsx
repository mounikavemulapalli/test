import React, { useState, useRef } from "react";
import "./ResearchHub.css";
import Mentors from "../comman/Mentors.jsx";
import ExpertTalks from "./ExpertTalks.jsx";
import GlobalExperts from "../comman/GlobalExperts.jsx";
import SuperScience from "../comman/SuperScience.jsx";
import PopupButton from "../premium/PopupButton.jsx";

export default function ResearchHub() {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const SuperDailyUspCard = (props) => {
    return (
      <div className="super-daily-usp-card">
        <img width="100" src={props.imgSrc} />
        <div>
          <h3>{props.heading}</h3>
          <p>{props.para}</p>
        </div>
      </div>
    );
  };

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

  const handleCardClick = (id) => {
    setClickedCardId(id);
  };
  return (
    <>
      <section className="research-banner">
        <div style={{ lineHeight: "5rem" }}>
          <h1>A Dedicated Research Centre</h1>
          <h2>Led by Top Minds from IITs, AIIMS, and MIT</h2>
          <p style={{ lineHeight: "1.5rem" }}>
            UpTodd’s dedicated research team, featuring top experts from IITs,
            AIIMS, and MIT, explores the science of early brain development in
            babies. Through this research-driven approach, UpTodd uncovers the
            benefits of early intervention and stimulation, equipping you with
            the most effective tools to support your child’s growth and
            potential.
          </p>
        </div>
        <div>
          <img
            src="https://www.uptodd.com/images/newWebsite/research-banner-image.webp"
            width="100%"
          />
        </div>
      </section>

      <section style={{ paddingBlock: "77px" }}>
        <div className="state-of-art-rnd">
          <div className="state-of-art-text">
            <h2>State of the Art R&D</h2>
            <div>
              <p>
                UpTodd’s advanced R&D center pioneers the science of baby brain
                development. Our team of experts consistently innovates with new
                methods and publishes research, keeping us at the forefront of
                early childhood growth and parenting strategies.
              </p>
              <p>
                Every item, from toys to app content, is thoughtfully crafted to
                align with a baby’s interests and developmental milestones at
                each age. This research-backed approach by UpTodd boosts
                attention span and supports well-rounded development.
              </p>
              <p>
                Our toys are carefully lab-tested for both safety and
                engagement. Ongoing research by our R&D team guarantees that
                every part of our program supports and enhances your baby's
                brain development journey.
              </p>
            </div>
          </div>
          <img src="https://www.uptodd.com/images/newWebsite/state-of-art-rnd.webp" />
        </div>

        <div className="state-of-art-grid">
          <div className="state-of-art-grid-item">
            <img src="https://www.uptodd.com/images/newWebsite/oxytocin-reflective-tech.webp" />
            <p>
              Oxytocin hormone: Known to enhance a baby's attention span and
              focus.
            </p>
          </div>
          <div className="state-of-art-grid-item">
            <img src="https://www.uptodd.com/images/newWebsite/screen-free-stimulation.webp" />
            <p>
              ScreenTime Solution: Utilizing audio-visual materials to help
              reduce stimulation.
            </p>
          </div>
          <div className="state-of-art-grid-item">
            <img src="https://www.uptodd.com/images/newWebsite/organic-material.webp" />
            <p>
              Organic Materials: Preventing delays in development by avoiding
              the use of inorganic materials.
            </p>
          </div>
          <div className="state-of-art-grid-item">
            <img src="https://www.uptodd.com/images/newWebsite/wel-tested-toys.webp" />
            <p>Toy Testing: Ensuring Safety for Every Baby.</p>
          </div>
        </div>
      </section>

      <section className="start-now-banner">
        <div className="start-now-banner-grid">
          <h3>
            The team analyzed over 10,000 research studies to develop every
            aspect of the program, including colors, music, touch, sounds, and
            all related elements.
          </h3>
          <PopupButton text="View White Papers" />
        </div>
      </section>
      <section className="building-brain-impact">
        <div className="building">
          <iframe
            style={{ textAlign: "center", maxWidth: "100%" }}
            loading="lazy"
            width="853"
            height="480"
            srcDoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover;overflow:hidden}</style> <a href='https://www.youtube.com/embed/VNNsN9IJkws?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' className='full'> <img src='https://www.uptodd.com/images/newWebsite/inside-baby-genius.webp' className='full' /> <svg version='1.1' viewBox='0 0 68 48' width='68px' style='position: absolute; top:50%; left:50%; transform:translate(-50%,-50%)'><path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path><path d='M 45,24 27,14 27,34' fill='#fff'></path></svg> </a>"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
            data-gtm-yt-inspected-4="true"
            data-gtm-yt-inspected-40611628_62="true"
            id="275573034"
            data-gtm-yt-inspected-14="true"
          ></iframe>
        </div>
        <div className="building-brain-impact-text">
          <p>
            A child's brain forms a million neural connections every second, and
            interactions that involve give-and-take help shape its structure.
          </p>
          <p>
            Every second, a child's brain forms 1 million neural connections.
            These "serve and return" interactions are vital for shaping brain
            development. Our research-based UpTodd program guarantees that these
            connections are nurtured in the most effective way.
            <br />
            <br />
            Exposing your child to a variety of meaningful experiences helps
            build strong brain connections. The brain strengthens the
            connections that are regularly used and eliminates weaker ones
            through a process known as pruning.
            <br />
            <br />
            The early years are a crucial time for brain flexibility and growth.
          </p>
        </div>
      </section>

      <SuperScience />

      <section className="super-daily-why-uptodd">
        <h1>UpTodd's Philosphies</h1>
        <div className="super-daily-why-uptodd-cards">
          <SuperDailyUspCard
            imgSrc="https://www.uptodd.com/images/newWebsite/philosophies/1.webp"
            heading="Tailored Guidance for Your Child's Development"
            para="At UpTodd, we understand that each child has their own individual developmental needs. Our research-driven approach provides personalized solutions that aim to boost growth by five times."
          />
          <SuperDailyUspCard
            imgSrc="https://www.uptodd.com/images/newWebsite/philosophies/2.webp"
            heading="A supportive and caring atmosphere, resembling that of a family"
            para="At UpTodd, we act as your extended family, offering evidence-based strategies and personalized attention to foster your child's overall development."
          />
          <SuperDailyUspCard
            imgSrc="https://www.uptodd.com/images/newWebsite/philosophies/3.webp"
            heading="Carefully Designed Custom Mega Kit"
            para="Our premium toy kits and solutions go through a thorough 7-step approval process, guaranteeing top-tier features designed to meet your baby's developmental requirements. With complete personalization, our UpTodd scientific approach ensures that each element of the kit aligns with the principles of baby brain development."
          />
          <SuperDailyUspCard
            imgSrc="https://www.uptodd.com/images/newWebsite/philosophies/4.webp"
            heading="A comprehensive, research-backed app for all your solutions"
            para="The UpTodd app provides customized insights tailored to your child’s developmental needs. Our committed team ensures that every feature is crafted to enhance your child’s growth. Supported by thorough research, the app reflects the UpTodd’s scientifically-backed approach to early development."
          />
        </div>
      </section>

      <GlobalExperts />

      <ExpertTalks/>
      <Mentors />
    </>
  );
}
