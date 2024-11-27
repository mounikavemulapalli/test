import React, { useState } from "react";
import "./ParentsLove.css";
import { parentsData } from "../../assets/data/parentsData";

function ParentsLove() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sub-parents">
      <h1 className="sub-parents-heading">
        We are Loved by Parents | 150K+ Parents
      </h1>

      <div
        className="sub-parents-review-list"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`sub-parents-cards ${isHovered ? "paused" : ""}`}>
          {parentsData.map((data) => (
            <div key={data.id} className="sub-parents-card">
              <img src={data.image} alt="Baby Image" />
              <h2>{data.name}</h2>
              <p>{data.about}</p>
              <h4>{data.parent}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParentsLove;
