import React, { useState } from 'react';
import { FaqProgram, FaqBabyKit, Enrollment } from '../assets/Lists/faq.js';

export const Faq = () => {
    const [faqProgramId, setFaqProgramId] = useState(FaqProgram[0].id);
    const [faqBabyKit, setFaqBabyKitId] = useState(FaqBabyKit[0].id);
    const [enrollment, setFaqEnrollment] = useState(Enrollment[0].id);
    const [activeContent, setActiveContent] = useState("Program");

    const handleCardClickForFaq = id => {
        setFaqProgramId(id);
        setFaqBabyKitId(id);
        setFaqEnrollment(id);
    };

    const categories = ['Program', 'Baby Kit', 'Enrollment'];

    const content = {
        faqProgram: (
            <>
                {FaqProgram.map(faqEle => (
                    <div
                        key={faqEle.id}
                        onClick={() => handleCardClickForFaq(faqEle.id)}
                        className={`faq-card programFaq ${faqProgramId === faqEle.id ? "faq-active-card" : ""}`}
                    >
                        <h3>{faqEle.qus}</h3>
                        <p>{faqEle.ans}</p>
                        <p>{faqEle.ans1}</p>
                        <p>{faqEle.ans2}</p>
                    </div>
                ))}
            </>
        ),
        faqBabyKit: (
            <>
                {FaqBabyKit.map(faqEle => (
                    <div
                        key={faqEle.id}
                        onClick={() => handleCardClickForFaq(faqEle.id)}
                        className={`faq-card programFaq ${faqBabyKit === faqEle.id ? "faq-active-card" : ""}`}
                    >
                        <h3>{faqEle.qus}</h3>
                        <p>{faqEle.ans}</p>
                        <p>{faqEle.ans1}</p>
                        <p>{faqEle.ans2}</p>
                    </div>
                ))}
            </>
        ),
        enrollment: (
            <>
                {Enrollment.map(faqEle => (
                    <div
                        key={faqEle.id}
                        onClick={() => handleCardClickForFaq(faqEle.id)}
                        className={`faq-card programFaq ${enrollment === faqEle.id ? "faq-active-card" : ""}`}
                    >
                        <h3>{faqEle.qus}</h3>
                        <p>{faqEle.ans}</p>
                        <p>{faqEle.ans1}</p>
                        <p>{faqEle.ans2}</p>
                        <p>{faqEle.ans3}</p>
                        <p>{faqEle.ans4}</p>
                        <p>{faqEle.ans5}</p>
                        <p>{faqEle.ans6}</p>
                        <p>{faqEle.ans7}</p>
                    </div>
                ))}
            </>
        ),
    };

    return (
        <section id="faqs">
            <h1>Frequently Asked Questions</h1>
            <div id="faq-list">
                <div id="faq-category-list">
                    {categories.map((category, index) => {
                        return (<button className={`faq-category-button ${activeContent == category ? 'active-faq-category' : ''}`} onClick={() => { setActiveContent(category) }}>{category}</button>)
                    })}
                </div>

                {activeContent == 'Program' && content.faqProgram}
                {activeContent == 'Baby Kit' && content.faqBabyKit}
                {activeContent == 'Enrollment' && content.enrollment}
            </div>
        </section>
    )
}
export default Faq; 
