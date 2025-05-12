import { useEffect } from "react";
import Navigation from "../components/Navigation";
import IntroScene from "../components/IntroScene";
import WhatIsHoH from "../components/WhatIsHoH.jsx";
import WhyNow from "../components/WhyNow";
import WhoNominate from "../components/WhoNominate";
import WhyUnique from "../components/WhyUnique";
import EventNight from "../components/EventNight";
import NominateNow from "../components/NominateNow";
import Jury from "../components/Jury";
import Guests from "../components/Guests";
import Advisory from "../components/Advisory";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import ParallaxWrapper from "../components/ParallaxWrapper";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 3000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="home-container">
      <Navigation />
      <div className="section-stack">
        <ParallaxWrapper speed={0.2}>
          <div id="intro" className="section-anchor">
            <IntroScene />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="what-is-hoh" className="section-anchor">
            <WhatIsHoH />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.4}>
          <div id="why-now" className="section-anchor">
            <WhyNow />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="who-nominate" className="section-anchor">
            <WhoNominate />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.4}>
          <div id="why-unique" className="section-anchor">
            <WhyUnique />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="event-night" className="section-anchor">
            <EventNight />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.2}>
          <div id="nominate" className="section-anchor">
            <NominateNow />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="jury" className="section-anchor">
            <Jury />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.2}>
          <div id="guests" className="section-anchor">
            <Guests />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.3}>
          <div id="advisory" className="section-anchor">
            <Advisory />
          </div>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.2}>
          <div id="sponsors" className="section-anchor">
            <Sponsors />
          </div>
        </ParallaxWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
