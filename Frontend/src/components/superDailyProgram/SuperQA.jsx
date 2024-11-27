import React, { useState } from "react";
import { superQA } from "../../assets/data/superQA.js";

export default function SuperQA() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = id => {
    setActiveQuestion(prev => (prev === id ? null : id));
  };

  return (
    <section id='faqs'>
      <h1>FQAs</h1>
      <div id="faq-list">
        <div id="faq-category-list">
          <a href="/super_daily_app_program"><button className="faq-category-button active-faq-category">Program</button></a>
        </div>
        {superQA.map(data => (
          <div
            key={data.id}
            className={`faq-card programFaq ${activeQuestion === data.id ? "faq-active-card" : ""}`}
            onClick={() => toggleQuestion(data.id)}>
            <h3>{data.ques}</h3>
            {activeQuestion === data.id && <p>{data.ans}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}