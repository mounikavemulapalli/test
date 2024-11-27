import React from "react";
import "./SuperScience.css";

function SuperScience() {
  return (
    <div className="super-science">
      <h1>
        Science-Backed Approach: <span>Rooted in Research</span>
      </h1>
      <h5>
        Developed using research from leading Global institutions &amp;
        Organisations
      </h5>

      {/* Research analysed by institutions from */}
      <div className="super-science1">
        <div className="super-science1-header">
          <h4>Research analysed by institutions from</h4>
        </div>
        <img
          src="https://www.uptodd.com/images/newWebsite/research-insti.webp"
          alt=""
        />
        <p>and 35+ other top global institutions</p>
      </div>

      {/* after 768px */}
      <div class="super-science1-mobile">
        <div class="super-science1-mobile-header">
          <h4>Research analysed by institutions from</h4>
        </div>
        <img
          src="https://www.uptodd.com/images/newWebsite/research-insti-mobile.webp"
          onerror="this.onerror=null; this.src='/images/newWebsite/research-insti-mobile.png'"
          loading="lazy"
          alt="IIT,IIM,MIT,Harvard Research Institutes"
        />
      </div>

      {/* Enriched with top research by */}
      <div className="super-science2">
        <div className="super-science2-header">
          <h4>Enriched with top research by</h4>
        </div>
        <img
          src="https://www.uptodd.com/images/newWebsite/researchers/all_researchers.webp"
          alt=""
        />
        <p>and 50+ other top global experts</p>
      </div>

      {/* after 768px */}
      <div className="super-science2-mobile">
        <div className="super-science2-mobile-header">
          <h4>Enriched with top research by</h4>
        </div>
        <div className="super-science2-mobile-list">
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/glenn-doman.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/glenn-doman.png'"
              loading="lazy"
              alt="glenn-doman baby development expert"
            />
            <h3>Glenn Doman</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/maria-montessori.png'"
              loading="lazy"
              alt="maria-montessori baby development expert"
            />
            <h3>Maria Montessori</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/rudolf-steiner.png'"
              loading="lazy"
              alt="rudolf-steiner baby development expert"
            />
            <h3>Rudolf Steiner</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/bf-skinner.png'"
              loading="lazy"
              alt="bf-skinner baby development expert"
            />
            <h3>BF Skinner</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/loris-malaguzzi.png'"
              loading="lazy"
              alt="loris-malaguzzi baby development expert"
            />
            <h3>Loris Malaguzzi</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/howard-gardner.png'"
              loading="lazy"
              alt="howard-gardner baby development expert"
            />
            <h3>Howard Gardner</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/diana-baumrind.png'"
              loading="lazy"
              alt="diana-baumrind baby development expert"
            />
            <h3>Diana Baumrind</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/swami-vivekanand.png'"
              loading="lazy"
              alt="swami-vivekanand"
            />
            <h3>Swami Vivekanand</h3>
          </div>
          <div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/researchers/jean-piaget.png'"
              loading="lazy"
              alt="jean-piaget baby development expert"
            />
            <h3>Jean Piaget</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperScience;
