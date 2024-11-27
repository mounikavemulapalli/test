import React from 'react';
import "./Blog.css";
import appstore from '../../assets/images/footer/appstore.webp';
import playstore from '../../assets/images/footer/googleplay.webp';

export default function BlogFooter() {
  return (
    <footer>
      <h3>About UpTodd</h3>
      <p>At UpTodd, we've carefully curated our approach by leveraging insights from over 10,000+ research papers and tapping into the expertise of professionals from prestigious institutions like MIT, Stanford, IITs, and AIIMS. Our program integrates techniques from globally recognized methodologies, including early stimulation from Glenn Doman, Montessori's emphasis on independence and exploration, Howard Gardner's theory of multiple intelligences from Harvard University, Waldorf's holistic approach, the Reggio Emilia Approach's focus on creativity, indigenous parenting and mindful parenting. This comprehensive approach empowers babies worldwide to thrive and reach their full potential with evidence-based guidance.</p>

      <h3>Our Journey</h3>
      <p>In 2015, three passionate individuals embarked on a mission to uplift children's lives. As they ran an education-focused NGO, they uncovered a shared concern – young minds with untapped potential, hindered by foundational gaps.
        After conducting extensive meetings with more than 5,000 parents of babies aged 0-5, which included their own families, a shared aspiration became evident: to provide brightest possible future to the child. But they observed challenges arising from the rapid pace of the contemporary world, leading to a decline in access to natural socialization & outdoor experiences that were once readily available. Additionally, there was a notable absence of guidance to help unlock the untapped potential of the babies.So, in collaboration with esteemed experts, We developed a tailored solution aimed at promoting brain development & delivering essentials. The results were astounding.
        <br /><br />
        In 2019, UpTodd was born, accessible to parents in over 150 countries. We passionately believe that every child, regardless of their background, possesses boundless potential. We're here to guide you on a scientific and emotional journey to unlock it, by a customised program made for your baby.
        <br /><br />
        Join us on this captivating journey, where every child is truly special, and every family's dreams matter.</p>
      <div style={{ marginBottom: '1.2rem' }}>
        <a href="https://apps.apple.com/in/app/uptodd/id1558333792" target='_blank'><img src={appstore} /></a><br />
        <a href="https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp" target='_blank'><img src={playstore} /></a>
      </div>

      <ul>
        <li><a href='/research'>Research Hub</a></li>
        <li><a href="/terms-conditions">Terms & Conditions</a></li>
      </ul>
    </footer>
  )
}
