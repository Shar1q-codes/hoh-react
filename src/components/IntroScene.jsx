import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/introScene.css";
// import hyderabadSkyline from "../assets/images/hyderabad.jpg"; // ← You can rename this image as needed

const IntroScene = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="intro-container">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="intro-bg">
        <img
          src="/assets/images/charminar.jpeg"
          alt="Hyderabad Skyline"
          className="bg-img"
        />
        <div className="bg-overlay" />
      </motion.div>

      {/* Hero Content */}
      <motion.div style={{ opacity }} className="intro-content">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Heroes of Hyderabad
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Celebrating the unsung heroes who make Hyderabad a better place
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#nominate" className="nominate-link">
            Nominate Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="scroll-indicator"
      >
        <div className="scroll-box">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="scroll-dot"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default IntroScene;
