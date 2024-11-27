import aboutImage from "/src/assets/images/1.webp";
import additionalImage from "/src/assets/images/2.webp";
import Slider from "../comman/Slider.jsx";
import Iframe from "react-iframe";
import { doctorReviews } from "../../assets/Lists/doctorReviews.js";
import "./AboutSection.css"; 
import { boardMembers } from "../../assets/Lists/boardMembers.js";
import about from "../../assets/Lists/about.js"; // Importing the default export

const About = () => {
  return (
    <article>
      <div>
        <div className="focussection">
          <h1>
            We are dedicated to personalizing each child's journey to the best
            of our ability. Our commitment to success drives us to ensure every
            family that joins UpTodd thrives.
          </h1>
        </div>
        <div className="aboutus-container">
          <div className="ourgoalsection">
            <p>
              Our goal is to empower every parent with confidence. Our play
              products are crafted by child development experts, carefully
              designed to fulfill a child's needs at each stage in the simplest
              and most effective way.
            </p>
          </div>

          {/* First Image div */}
          <div id="imagecontainer">
            <img src={aboutImage} alt="About Section" className="main-image" />
          </div>

          {/* Our Story div */}
          <div id="ourstorySection">
            <div className="ourstory-container">
              <div className="text">
                <h2>Our Story</h2>
                <img
                  className="journey-background-img1"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-1.webp"
                  onError="this.onerror=null; this.src='/images/newWebsite/journey/background-1.webp'"
                  loading="lazy"
                  alt="Uptodd baby growth"
                ></img>
                <h3>Welcome to the World of UpTodd early development! </h3>
                <h4>Hello, Dear Parent!</h4>
                <p>
                  Welcome to the world of early development with UpTodd! We’re
                  thrilled to have you with us. UpTodd was founded by three
                  friends—Abhishek, Devesh, and Richa—who shared a vision that
                  every child deserves a bright and joyful beginning. Their
                  journey started in the inspiring halls of the IITs, fueled by
                  personal stories of resilience and hope. United by their
                  passion, they set out to bring a sense of wonder to early
                  childhood development.
                </p>
                <img
                  className="journey-background-img3"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-2.webp"
                  onError="this.onerror=null; this.src='/images/newWebsite/journey/background-2.webp'"
                  loading="lazy"
                  alt="Early baby development"
                ></img>
                <h3>The Birth of a Dream</h3>

                <p>
                  In 2015, Abhishek, Devesh, and Richa founded an NGO with the
                  mission of giving every child a strong educational foundation.
                  They soon realized that many parents shared a common desire:
                  to provide the best possible start for their children's early
                  development. This observation sparked a profound question:
                  What if? What if they could help parents offer the right,
                  meaningful approach to early childhood development? This
                  question fueled their passion and curiosity, setting them on a
                  journey to discover the answers.
                </p>
                <img
                  className="journey-background-img2"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-3.webp"
                  onError="this.onerror=null; this.src='/images/newWebsite/journey/background-3.png'"
                  loading="lazy"
                  alt="Uptodd baby development"
                ></img>
                <h3>Rooted in Love and Knowledge</h3>
                <p>
                  To turn their vision into reality, they partnered with over
                  100 leading experts and researchers in personalized baby
                  growth and development. They examined more than 10,000
                  research studies, driven by a passion to offer the best for
                  every child. From MIT to Stanford, IITs to AIIMS, each insight
                  contributed to crafting the perfect environment for UpTodd
                  early development—one filled with joy, creativity, and love.
                  This collaboration led to a breakthrough understanding of the
                  importance of personalized baby growth. In 2019, UpTodd early
                  development was born—a place where growth and happiness
                  converge, providing individualized attention to every child.
                </p>
                <img
                  className="journey-background-img4"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-4.webp"
                  onError="this.onerror=null; this.src='/images/newWebsite/journey/background-4.png'"
                  loading="lazy"
                  alt="Uptodd infant growth"
                ></img>
                <div id="imagecontainer">
                  <img
                    src={additionalImage}
                    alt="Additional visual content"
                    className="additional-image"
                  />
                </div>
                <h3>Understanding Parents' Hopes and Concerns</h3>

                <img
                  className="journey-background-img1"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-2.webp"
                  onerror="this.onerror=null; this.src='/images/newWebsite/journey/background-2.png'"
                  loading="lazy"
                  alt="Early baby development"
                ></img>
                <p>
                  Throughout their journey, they connected with over 5,000
                  parents and discovered a shared hope in every parent’s eyes:
                  to give their children the best start in customized baby
                  growth and development. However, they also uncovered a common
                  feeling of guilt due to limited time and the overwhelming
                  presence of screens and technology. This highlighted a deeper
                  concern about providing the right foundation in a world full
                  of challenges. The insights gained from these conversations
                  led to a profound understanding of the impact of UpTodd early
                  development, emphasizing the role of play and environment in
                  shaping a child’s growth.
                </p>
                <h3>Why uptodd started</h3>
                <p>
                  Fueled by these insights, UpTodd’s journey took flight in
                  2019, evolving from a single spark in India to a guiding light
                  in 158 countries. By viewing the world through the lens of
                  children's development, they saw boundless possibilities.
                  Their mission became clear: to give every baby the best start,
                  tailored specifically for them. UpTodd early baby development
                  strives to create a world where every baby, no matter where
                  they are, receives the right foundation for growth.
                </p>
                <img
                  className="journey-background-img3"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-1.webp"
                  onError="this.onerror=null; this.src='/images/newWebsite/journey/background-1.png'"
                  loading="lazy"
                  alt="Uptodd baby growth"
                ></img>
                <h3>Our Growing Family</h3>

                <p>
                  Building on this mission, UpTodd has expanded from a simple
                  online “hello” to a global community of over 150,000 members.
                  It’s a space where parents find support, share joyful moments,
                  and witness their children’s remarkable growth. Here, you’ll
                  discover a community that feels like an extended family,
                  celebrating every milestone with you.
                </p>
                <h3>Why You’ll Cherish UpTodd Early Development</h3>
                <p>
                  Additionally, our early development processes are uniquely
                  designed for your child, making every step both exciting and
                  joyful. At UpTodd, everything—from toys to stories—is crafted
                  to ignite curiosity and happiness. You’ll find a supportive
                  community here, celebrating each milestone alongside you. Our
                  approach is rooted in science and infused with warmth,
                  ensuring a journey filled with smiles and success for your
                  baby.
                </p>
                <h3>Driven by Passion and Innovation</h3>
                <p>
                  UpTodd’s specially crafted baby growth development programs
                  are designed to offer something truly exceptional. We provide
                  comprehensive support, from brain development to nutrition and
                  toys, all at an affordable cost.
                </p>
                <p>
                  We're here to nurture, support, and celebrate the unique
                  journey of every baby.
                </p>
                <h3>Join Our Story</h3>
                <p>
                  We invite you to join us on this heartfelt journey. At UpTodd,
                  we believe in the incredible potential within every child,
                  waiting to be nurtured and supported.
                </p>

                <img
                  className="journey-background-img2"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-4.webp"
                  onError="this.onerror=null; this.src='/images/newWebsite/journey/background-4.png'"
                  loading="lazy"
                  alt="Uptodd infant growth"
                ></img>
                <p>
                  Our promise to you is to provide everything at a price that
                  honors the value you seek for your family.
                </p>

                <p>
                  At the heart of UpTodd are people like you—parents, dreamers,
                  and believers.
                </p>

                <p>
                  Our leadership team, including Richa, Abhishek, and Devesh,
                  along with our panel of experts, invites you to meet the minds
                  shaping the future.
                </p>

                <img
                  className="journey-bg-img2"
                  src="https://www.uptodd.com/images/newWebsite/journey/background-3.webp"
                  onError="this.onerror=null; this.src='/images/newWebsite/journey/background-3.png'"
                  loading="lazy"
                  alt="Uptodd baby development"
                ></img>
                <p>
                  Each day at UpTodd is a fresh start, filled with laughter,
                  growth, and love. Here’s to the incredible journey ahead!
                </p>

                <p>
                  Welcome to UpTodd early development, where every day is a
                  celebration of growth and joy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended by Top Global Experts */}

        <div className="doctor-review" id="doctorreview">
          <h1>Recommended by Top Global Experts</h1>
          <h5>
            Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting
            Experts &amp; Professors
          </h5>
          <div className="doctor-review-list">
            <div className="doctor-review-container">
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/jaideep_sharma.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/jaideep_sharma.png'"
                    loading="lazy"
                    alt="Baby brain growth expert Dr.Jaideep Sharma"
                  />
                  <div>
                    <h3>Jaideep Sharma</h3>
                    <h6>Doctor, AIIMS, 1981 Batch</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    UpTodd’s parenting program for baby maximizes baby potential
                    from the womb to 5 years, offering an impressive solution
                    for early baby brain development
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/krishna_vedula.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/krishna_vedula.png'"
                    loading="lazy"
                    alt="Baby brain development specialist Krishna Vedula"
                  />
                  <div>
                    <h3>Krishna Vedula</h3>
                    <h6>Prof. MIT (USA)</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    This parenting program for baby addresses the global need
                    for early intervention, maximizing babies; learning
                    potential from prenatal to age 5
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/manoj_mondal.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/manoj_mondal.png'"
                    loading="lazy"
                    alt="Baby brain development expert Manoj Mondal"
                  />
                  <div>
                    <h3>Manoj Mondal</h3>
                    <h6>Prof. IIT Kharagpur</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    Home learning shapes success, and this parenting program for
                    baby unleashes your baby abilities, benefiting future
                    generations and informed parents
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/vaishal_sharma.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/vaishal_sharma.png'"
                    loading="lazy"
                    alt="Baby brain growth expert Vaishal Sharma"
                  />
                  <div>
                    <h3>Vaishal Sharma</h3>
                    <h6>Doctor, AIIMS, IVF Spec.</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    In the first 5 years, 90% of the baby's brain develops.
                    UpTodd is doing great tech and research work to nurture baby
                    development through their parenting program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/sudhanshu.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/sudhanshu.png'"
                    loading="lazy"
                    alt="Baby brain development specialist Sudhanshu Singh"
                  />
                  <div>
                    <h3>Sudhanshu Singh</h3>
                    <h6>Doctor, MBBS &amp; MD, CMC Vellore</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    UpTodd, backed by the expertise of over 1K professionals,
                    nurtures their genius during the first 5 years with a
                    comprehensive parenting program for baby
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/mani_kapur.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/mani_kapur.png'"
                    loading="lazy"
                    alt="Baby brain growth specialist Mani Kapur"
                  />
                  <div>
                    <h3>Mani Kapur</h3>
                    <h6>Doctor, MBBS &amp; PG, Gyno</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    Pregnancy is crucial; the baby's brain grows fastest in the
                    womb. Post-birth stimulation is also vital for nurturing the
                    baby's genius through UpTodd's baby parenting program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/saurabh_khanna.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/saurabh_khanna.png'"
                    loading="lazy"
                    alt="Baby growth specialist Saurabh Khanna"
                  />
                  <div>
                    <h3>Saurabh Khanna</h3>
                    <h6>Doctor, MBBS &amp; PG, Pedia</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    Every baby is born a genius, needing personalized care for
                    optimal growth. UpTodd excels in nurturing babies' brain
                    abilities and supporting parents through a tailored program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/sarvesh_thakur.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/sarvesh_thakur.png'"
                    loading="lazy"
                    alt="Baby Development Specialist Sarvesh Thakur"
                  />
                  <div>
                    <h3>Sarvesh Thakur</h3>
                    <h6>Doctor, MBBS &amp; PG, Pedia</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    From birth to 3-4 years, crucial developmental growth
                    occurs. UpTodd ensures perfect baby development with
                    comprehensive care in their parenting program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/vipul_sehrawat.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/vipul_sehrawat.png'"
                    loading="lazy"
                    alt="Baby Growth Expert Vipul Sehrawat"
                  />
                  <div>
                    <h3>Vipul Sehrawat</h3>
                    <h6>Doctor, MBBS &amp; MD, MAMC</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    With expertise in fetal ultrasound, I see the importance of
                    early cognitive care. UpTodd provides the best care from
                    womb to 60 months, laying a solid foundation for your baby
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/aditya_sharma.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/aditya_sharma.png'"
                    loading="lazy"
                    alt="Infant brain growth expert Aditya Sharma"
                  />
                  <div>
                    <h3>Aditya Sharma</h3>
                    <h6>Doctor, M.Ch. &amp; MS, Apollo</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    UpTodd fosters 300% potential growth through high-quality
                    care from womb to 60 months, offering the world's first
                    one-stop solution in a parenting program for your baby
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/rohit_kalani.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/rohit_kalani.png'"
                    loading="lazy"
                    alt="Infant growth specialist Rohit Kalani"
                  />
                  <div>
                    <h3>Rohit Kalani</h3>
                    <h6>Doctor, MBBS &amp; MD, Neonatol</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    At NICU, we see the impact of stimulation therapy. UpTodd's
                    products support it perfectly for babies, integrated into
                    their parenting program for babies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-mentors" id="our-mentors">
          <h1>
            Meet our Mentors &amp; Curators |
            <span>100+ Curators R&amp;D Team</span>
          </h1>
          <div className="mentor-container">
            <div className="mentors-list">
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/krishna_vedula.webp"
                  loading="lazy"
                  alt="Uptodd mentor Prof.Krishna Vedula MIT"
                />
                <h3>
                  Krishna Vedula
                  <br />
                  <span>Professor, MIT, United States</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/jaideep_sharma.webp"
                  loading="lazy"
                  alt="Uptodd mentor Dr.Jaideep Sharma AIIMS"
                />
                <h3>
                  Dr. Jaideep Sharma
                  <br />
                  <span>MBBS &amp; MD, AIIMS, New Delhi</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/sudhanshu.webp"
                  loading="lazy"
                  alt="Uptodd mentor Dr.Sudhanshu Singh"
                />
                <h3>
                  Dr. Sudhanshu
                  <br />
                  <span>MD, DSMA CMC Vellore</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/manoj_mondal.webp"
                  loading="lazy"
                  alt="Uptodd mentor Prof.Manoj Mondal IIT KGP"
                />
                <h3>
                  Manoj Mondal
                  <br />
                  <span>Professor, IIT Kharagpur</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/PK_Mishra.webp"
                  loading="lazy"
                  alt="Uptodd mentor PK Mishra IIT BHU"
                />
                <h3>
                  Prof. PK Mishra
                  <br />
                  <span>IIT BHU</span>
                </h3>
              </div>
            </div>
            <div className="scrollbar"></div> {/* Fixed scrollbar */}
          </div>
          <h1>UpTodd™ has been Featured In</h1>
          <div className="featured-in">
            <img
              src="https://www.uptodd.com/images/newWebsite/featured-in.webp"
              loading="lazy"
              alt="Media Houses Featuring UpTodd"
            />
          </div>
        </div>

        {/* Science-Backed Approach: Rooted in Research */}

        <div className="research-backed">
          <h1>
            Science-Backed Approach: <span>Rooted in Research</span>
          </h1>
          <h5>
            Developed using research from leading Global institutions &amp;
            Organisations
          </h5>
          <div className="insti-research">
            <div className="insti-head">
              <h4>Research analysed by institutions from</h4>
            </div>
            <img
              src="https://www.uptodd.com/images/newWebsite/research-insti.webp"
              onError="this.onError=null; this.src='/images/newWebsite/research-insti.png'"
              loading="lazy"
              alt="IIT,IIM,MIT,Harvard Research Institutes"
            />
            <p>and 35+ other top global institutions</p>
          </div>
          <div className="insti-research-mobile">
            <div className="insti-research-mobile-head">
              <h4>Research analysed by institutions from</h4>
            </div>
            <img
              src="https://www.uptodd.com/images/newWebsite/research-insti-mobile.webp"
              onError="this.onError=null; this.src='/images/newWebsite/research-insti-mobile.png'"
              loading="lazy"
              alt="IIT,IIM,MIT,Harvard Research Institutes"
            />
          </div>

          <div className="theory-research">
            <div className="theory-head">
              <h4>Enriched with top research by</h4>
            </div>
            <img
              src="https://www.uptodd.com/images/newWebsite/researchers/all_researchers.webp"
              onError="this.onError=null; this.src='/images/newWebsite/researchers/all_researchers.png'"
              loading="lazy"
              alt="Research Backed Personalised Program for Baby Development"
            />
            <p>and 50+ other top global experts</p>
          </div>
          <div className="theory-research-mobile">
            <div className="theory-research-mobile-head">
              <h4>Enriched with top research by</h4>
            </div>
            <div className="theory-research-mobile-list">
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/glenn-doman.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/glenn-doman.png'"
                  loading="lazy"
                  alt="glenn-doman baby development expert"
                />
                <h3>Glenn Doman</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/maria-montessori.png'"
                  loading="lazy"
                  alt="maria-montessori baby development expert"
                />
                <h3>Maria Montessori</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/rudolf-steiner.png'"
                  loading="lazy"
                  alt="rudolf-steiner baby development expert"
                />
                <h3>Rudolf Steiner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/bf-skinner.png'"
                  loading="lazy"
                  alt="bf-skinner baby development expert"
                />
                <h3>BF Skinner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/loris-malaguzzi.png'"
                  loading="lazy"
                  alt="loris-malaguzzi baby development expert"
                />
                <h3>Loris Malaguzzi</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/howard-gardner.png'"
                  loading="lazy"
                  alt="howard-gardner baby development expert"
                />
                <h3>Howard Gardner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/diana-baumrind.png'"
                  loading="lazy"
                  alt="diana-baumrind baby development expert"
                />
                <h3>Diana Baumrind</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/swami-vivekanand.png'"
                  loading="lazy"
                  alt="swami-vivekanand"
                />
                <h3>Swami Vivekanand</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/jean-piaget.png'"
                  loading="lazy"
                  alt="jean-piaget baby development expert"
                />
                <h3>Jean Piaget</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
