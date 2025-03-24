import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AgricultureSection from "../components/AgricultureSection";
import CommunitySection from "../components/contactus";
import FarmingIdeas from "../components/FarmingIdeas";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <CommunitySection/>
        <AgricultureSection/>
        <FarmingIdeas/>
        <Subscription/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
