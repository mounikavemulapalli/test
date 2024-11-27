import React from "react";
import "./Career.css";
import careerMainImage from "../../assets/images/career/careerMainImage.webp";
import careerLife1 from "../../assets/images/career/careerLife1.webp";
import careerLife2 from "../../assets/images/career/careerLife2.webp";
import careerLife3 from "../../assets/images/career/careerLife3.webp";
import careerLife4 from "../../assets/images/career/careerLife4.webp";
import logo1 from "../../assets/images/career/logo1.jpg";
import logo2 from "../../assets/images/career/logo2.png";
import logo3 from "../../assets/images/career/logo3.png";
import logo4 from "../../assets/images/career/logo4.jpg";
import logo5 from "../../assets/images/career/logo5.png";
import logo6 from "../../assets/images/career/logo6.png";
import logo7 from "../../assets/images/career/logo7.jpg";
import logo8 from "../../assets/images/career/logo8.jpg";
import logo9 from "../../assets/images/career/logo9.png";
import logo10 from "../../assets/images/career/logo10.png";
import logo11 from "../../assets/images/career/logo11.jpg";
import logo12 from "../../assets/images/career/logo12.png";
import ApplicationForm from "./ApplicationForm";
import Mentors from "../comman/Mentors";
import { careerAbout } from "../../assets/data/careerAbout";
import { teamCards } from "../../assets/data/teamCards";

function Career() {
  return (
    <div className="career-container">
      <div className="career-main">
        <img src={careerMainImage} alt="Career_Main_Image" />
      </div>

      {/* Why Join Us? Section*/}
      <div className="career-joinUs">
        <h1>Why Join Us?</h1>
        <p>At UpTodd, our mission goes beyond just delivering solutions; we are dedicated to fostering aspirations and shaping future possibilities. We serve as the world's leading and unique fully customized, all-in-one platform aimed at providing parents with exceptional support for their children's growth. Our passion resonates with the energy of countless dreams, all focused on unlocking the potential that every child possesses.</p>

        <p>Become a member of a forward-thinking team that values love, development, and the life-changing impact of effective parenting. Your role here transcends mere employment; it’s an opportunity to create a lasting impact, influence lives, and play a part in cultivating a better future. We are trailblazers, navigating uncharted paths to guarantee that every parent is equipped with the resources, insights, and support necessary to unleash their child's limitless potential.</p>

        <p>This is not just a request for action; it's a summons to your heart, your purpose, and the significant difference we can create collectively. UpTodd serves as your platform to motivate, transform, and guide with compassion. Come together with us to build a future where each child flourishes, supported by the most devoted team of visionaries, activists, and advocates.</p>

        <p>If you are passionate about making a genuine impact and aspire to contribute to a meaningful cause, UpTodd is here for you. Together, let’s build a legacy of empowered parenting, impacting one child at a time.</p>
      </div>

      {/* About Section */}
      <div className="career-about-cards">
        {careerAbout.map((data) => (
          <div key={data.id} className="career-about-card">
            <div className="career-about-card-image">
              <img src={data.image} alt="Career About Images" />
            </div>
            <div className="career-about-card-content">
              <h1>{data.name}</h1>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Life Section*/}
      <div className="career-life">
        <h1>Life at UpTodd</h1>
        <p>An environment that encourages both career development and individual progress.</p>
        <div className="career-life-image">
          <img src={careerLife1} alt="Employees Photos" />
          <img src={careerLife2} alt="Employees Photos" />
          <img src={careerLife3} alt="Employees Photos" />
          <img src={careerLife4} alt="Employees Photos" />
        </div>
      </div>

      {/* Team Section */}
      <div className="career-team">
        <div className="career-team-content">
          <h1>Join our team</h1>
          <p>At UpTodd, we aim to be a guiding light in personalized parenting, providing exceptional support and insights to parents across the globe. Our goal is straightforward: to unlock every child's potential and to make every parent's journey a delightful one. In our space, innovation intersects with compassion, paving the way for a future where parenting is not only simpler but also an enriching adventure. Become a part of our movement, where collectively nurturing the future stars is a shared enthusiasm.</p>
        </div>

        <div className="career-team-cards">
          {teamCards.map((data) => (
            <div key={data.id} className="career-team-card">
              <img src={data.image} alt="Image" />
              <h1>{data.name}</h1>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>

        {/* Mentor Section */}
        <Mentors />
      </div>

      {/* ApplicationForm Section */}
      <ApplicationForm />

      {/* Career Footer Section */}
      <div className="career-footer">
        <div className="career-footer-about">
          <h2>About UpTodd</h2>
          <p>
            Introducing the world's best and only true personalized one-stop
            (patent pending) platform for the holistic developmental needs of
            infants and toddlers aged 0-5 years — setting a new standard in
            early childhood care.
            <br />
            At UpTodd, we've carefully curated our approach by leveraging
            insights from over 10,000+ research papers and tapping into the
            expertise of professionals from prestigious institutions like MIT,
            Stanford, IITs, and AIIMS. Our program integrates techniques from
            globally recognized methodologies, including early stimulation from
            Glenn Doman, Montessori's emphasis on independence and exploration,
            Howard Gardner's theory of multiple intelligences from Harvard
            University, Waldorf's holistic approach, the Reggio Emilia
            Approach's focus on creativity, indigenous parenting and mindful
            parenting. This comprehensive approach empowers babies worldwide to
            thrive and reach their full potential with evidence-based guidance.
          </p>
        </div>

        <div className="career-footer-journey">
          <h2>Our Journey</h2>
          <p>
            In 2015, three passionate individuals embarked on a mission to
            uplift children's lives. As they ran an education-focused NGO, they
            uncovered a shared concern – young minds with untapped potential,
            hindered by foundational gaps.
            <br />
            After conducting extensive meetings with more than 5,000 parents of
            infants aged 0-5 years, which included their own families, a shared
            aspiration became evident: to provide brightest possible future to
            the child. But they observed challenges arising from the rapid pace
            of the contemporary world, leading to a decline in access to natural
            socialization & outdoor experiences that were once readily
            available. Additionally, there was a notable absence of guidance to
            help unlock the untapped potential of the babies.So, in
            collaboration with esteemed experts, We developed a tailored
            solution aimed at promoting brain development & delivering
            essentials. The results were astounding.
            <br />
            In 2019, UpTodd was born, accessible to parents in over 150
            countries. We passionately believe that every child, regardless of
            their background, possesses boundless potential. We're here to guide
            you on a scientific and emotional journey to unlock it, by a
            customised program made for your baby.
            <br />
            <br />
            Join us on this captivating journey, where every child is truly
            special, and every family's dreams matter.
          </p>
        </div>

        <div className="career-footer-icons">
          <img src={logo1} alt="airtel_logo" />
          <img src={logo2} alt="americanExpress_logo" />
          <img src={logo3} alt="freecharge_logo" />
          <img src={logo4} alt="mastercard_logo" />
          <img src={logo5} alt="payzapp_logo" />
          <img src={logo6} alt="googlePay_logo" />
          <img src={logo7} alt="paytm_logo" />
          <img src={logo8} alt="mobikwik_logo" />
          <img src={logo9} alt="visa_logo" />
          <img src={logo10} alt="Rupay_logo" />
          <img src={logo11} alt="olaMoney_logo" />
          <img src={logo12} alt="phonepe_logo" />
        </div>

        <hr />

        <div className="career-footer-lastDiv">
          <h4>Copyright UpTodd Care Pvt ltd © 2024. All Rights Reserved</h4>
          <h4>
            Made with Love <span>❤</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Career;
