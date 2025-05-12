import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/whatIsHoH.css";

// import crowdCelebration from "../assets/images/crowd.jpg";
// import communityLeaders from "../assets/images/leaders.jpg";
// import innovators from "../assets/images/innovators.jpg";

const WhatIsHoH = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="hoh-section">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="hoh-bg">
        <img
          src="/assets/images/crowd.jpg"
          alt="Crowd Celebration"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="hoh-content">
        <div className="hoh-grid">
          {/* Left Column */}
          <div className="hoh-text">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What is Heroes of Hyderabad?
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Heroes of Hyderabad is a prestigious initiative that recognizes
              and celebrates the extraordinary individuals who have made
              significant contributions to our city’s growth and development.
              These unsung heroes work tirelessly across various sectors to make
              Hyderabad a better place for everyone.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Through this platform, we aim to shine a spotlight on their
              remarkable achievements and inspire others to follow in their
              footsteps. Join us in honoring these exceptional individuals who
              embody the true spirit of Hyderabad.
            </motion.p>
          </div>

          {/* Right Column - Images */}
          <div className="hoh-images">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="main-img"
            >
              <img
                src="/assets/images/leaders.jpg"
                alt="Community Leaders"
                className="img-rounded"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="overlay-img"
            >
              <img
                src="/assets/images/innovators.jpg"
                alt="Innovators"
                className="img-rounded"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatIsHoH;
