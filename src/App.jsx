import Navigation from "./components/Navigation";
import LoadingWrapper from "./components/LoadingWrapper";
import Footer from "./components/Footer";

import ParallaxWrapper from "./components/ParallaxWrapper";

import IntroScene from "./components/IntroScene";
import WhatIsHoH from "./components/WhatIsHoH";
import WhyNow from "./components/WhyNow";
import WhoNominate from "./components/WhoNominate";
import WhyUnique from "./components/WhyUnique";
import EventNight from "./components/EventNight";
import NominateNow from "./components/NominateNow";
import Jury from "./components/Jury";
import Guests from "./components/Guests";
import Advisory from "./components/Advisory";
import Sponsors from "./components/Sponsors";

import "./styles/global.css"; // optional if you have global styles

const App = () => {
  return (
    <LoadingWrapper>
      <div className="app-container bg-black text-white">
        <Navigation />

        {/* Scroll Sections with ParallaxWrapper */}
        <div className="sections-wrapper">
          <ParallaxWrapper speed={0.2}>
            <IntroScene />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.25}>
            <WhatIsHoH />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.3}>
            <WhyNow />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.25}>
            <WhoNominate />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.35}>
            <WhyUnique />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.2}>
            <EventNight />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.3}>
            <NominateNow />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.25}>
            <Jury />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.3}>
            <Guests />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.25}>
            <Advisory />
          </ParallaxWrapper>

          <ParallaxWrapper speed={0.2}>
            <Sponsors />
          </ParallaxWrapper>
        </div>

        <Footer />
      </div>
    </LoadingWrapper>
  );
};

export default App;
