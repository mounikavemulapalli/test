import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ApplicationForm from "../components/careerPage/ApplicationForm";
import About from "./About/About";
import Home from "./Home/Home";
import "../Styles/About.css";
import "./App.css";
import Step from "./premium/Step";
import SuccessStory, { Awardees } from "../components/Home/SuccessStory";
import Footer from "../components/footer/Footer";
import Premium from "./premium/Premium";
import NavBar from "../components/NavBar";
import Career from "../components/careerPage/Career";
import SuperDailyProgram from "./superDailyProgram/SuperDailyProgram";
import SubscriptionBox from "./subscriptionBox/SubscriptionBox";
import ResearchHub from "../components/Research Hub/ResearchHub";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import TermsCondition from "./termsCondition/TermsCondition";
import Contact from "./contact_us/contactPage";
import Blog from './Blog/Blog';
import AllHappyParents from "./Home/AllHappyParents.jsx"
import { Article } from './Blog/Blog.jsx';
import BabyAchieversAll from './Home/Baby-achievers-all.jsx';
import UnapprovedMsg from './Blog/UnapprovedMsg.jsx';

export default function App() {

  // States for blog page search bar
  const [inputKeyword, setInputKeyword] = useState('');
  const [searchedKeyword, setSearchedKeyword] = useState('');

  // State to open article in blog page
  const [selectedTitle, setSelectedTitle] = useState('Article not found');

  return (
    <Router>
      <NavBar inputState={{ inputKeyword, setInputKeyword }} setSearchedKeyword={setSearchedKeyword} />
      <MainRoutes searchedKeyword={searchedKeyword} selectedTitle={selectedTitle} setSelectedTitle={setSelectedTitle} />
    </Router>
  );
}

function MainRoutes({ searchedKeyword, setSelectedTitle }) {
  const location = useLocation();
  const hideFooterRoutes = ['/blog', '/premium', '/super_daily_app_program', '/privacy-policy', '/terms-conditions'];
  const isFooterHidden = hideFooterRoutes.includes(location.pathname) || location.pathname.startsWith('/blog/');

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Apply' element={<ApplicationForm />} />
        <Route path='/step' element={<Step />} />
        <Route path='/success story' element={<SuccessStory />} />
        <Route path='/baby-champs' element={<Awardees />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/happy-parents' element={<AllHappyParents />} />
        <Route path='/baby-achievers' element={<BabyAchieversAll />} />
        <Route path='/career' element={<Career />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-conditions' element={<TermsCondition />} />
        <Route path='/super_daily_app_program' element={<SuperDailyProgram />} />
        <Route path="/blog" element={<Blog searchedKeyword={searchedKeyword} setSelectedTitle={setSelectedTitle} />} />
        <Route path='/blog/:title' element={<Article />} />
        <Route path='/subscription_box' element={<SubscriptionBox />} />
        <Route path='/research' element={<ResearchHub />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path="/unapproved" element={<UnapprovedMsg/>} />
      </Routes>
      {!isFooterHidden && <Footer />}
    </>
  );
}