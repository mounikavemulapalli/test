import "./footer.css";
import footerLogo from "../../assets/images/footer/footer-logo.webp";
import facebook from "../../assets/images/footer/facebook.svg";
import youtube from "../../assets/images/footer/youtube.svg";
import insta from "../../assets/images/footer/insta.svg";
import linkedin from "../../assets/images/footer/linkedin.svg";
import appstore from "../../assets/images/footer/appstore.webp";
import playstore from "../../assets/images/footer/googleplay.webp";
import line from "../../assets/images/footer/line.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-list">
        <div className="footer-card" id="footer-card-with-logo">
          <div className="nav-logo">
            <img src={footerLogo} alt="" />
          </div>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/uptodd/" target="_blank">
              <img src={facebook} alt="UpTodd - Nurturing Baby Genius" />
            </a>
            <a
              href="https://www.instagram.com/uptoddler/?hl=en"
              target="_blank"
            >
              <img src={insta} alt="UpTodd - Nurturing Baby Genius" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCsFXOLtW2VeaFgXK-VxLC5g"
              target="_blank"
            >
              <img src={youtube} alt="UpTodd - Nurturing Baby Genius" />
            </a>
            <a
              href="https://www.linkedin.com/company/uptodd/?originalSubdomain=in"
              target="_blank"
            >
              <img src={linkedin} alt="UpTodd - Nurturing Baby Genius" />
            </a>
          </div>
        </div>
        <div className="footer-card">
          <h3>Company</h3>
          <li>
            <a href="/about" target="_blank">
              About us
            </a>
          </li>
          <li>
            <a href="/career" target="_blank">
              Career
            </a>
          </li>
          <li>
            <a href="/contact-us" target="_blank">
              Contact us
            </a>
          </li>
        </div>
        <div className="footer-card">
          <h3>Community</h3>
          <li>
            <a
              href="https://blog.uptodd.com/parenting-stories/"
              target="_blank"
            >
              Share your journey
            </a>
          </li>
          <li>
            <a href="/blog" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="/research" target="_blank">
              Research Hub
            </a>
          </li>
        </div>
        <div className="footer-card">
          <h3>Program</h3>
          <li>
            <a href="/premium" target="_blank">
              Personalised Premium Program
            </a>
          </li>
          <li>
            <a
              id="homeScreenToSuperDailyViaFooter"
              href="/super_daily_app_program"
              target="_blank"
            >
              Super Daily Program
            </a>
          </li>
          <li>
            <a
              id="homeScreenToSuperDailyViaFooter"
              href="/subscription_box"
              target="_blank"
            >
              Subscription Box
            </a>
          </li>
        </div>
        <div className="footer-card" id="footer-card-with-applinks">
          <h3>Download App now</h3>
          <div className="application-links">
            <a
              href="https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp&amp;hl=en_IN&amp;gl=US"
              target="_blank"
            >
              <img src={playstore} alt="UpTodd - Nurturing Baby Genius" />
            </a>
            <a
              href="https://apps.apple.com/in/app/uptodd/id1558333792"
              target="_blank"
            >
              <img src={appstore} alt="UpTodd - Nurturing Baby Genius" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>
          © 2024 All Rights Reserved
          <span>
            <a href="/privacy-policy" target="_blank">
              Privacy policy
            </a>
          </span>
          <span>
            <a href="/terms-conditions" target="_blank">
              Terms and Conditions
            </a>
          </span>
        </h4>
        <img src={line} alt="UpTodd - Nurturing Baby Genius" />
        <p>
          Disclaimer: The information provided on this website is for general
          purposes only. We do not guarantee its accuracy or suitability for any
          specific use. Use it at your own discretion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
