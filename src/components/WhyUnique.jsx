import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/whyUnique.css";

// import crowdCelebration from "../assets/images/crowd.jpg";
// import communityLeaders from "../assets/images/leaders.jpg";
// import innovators from "../assets/images/innovators.jpg";
// import eventStage from "../assets/images/eventStage.jpg";

const features = [
  {
    title: "Comprehensive Recognition",
    description:
      "We celebrate heroes across all sectors, ensuring no contribution goes unnoticed.",
    image: "/assets/images/leaders.jpg",
  },
  {
    title: "Community-Driven",
    description:
      "Nominations come from the community, ensuring authentic representation of local heroes.",
    image: "/assets/images/innovators.jpg",
  },
  {
    title: "Prestigious Platform",
    description:
      "A grand ceremony that gives our heroes the recognition they truly deserve.",
    image: "/assets/images/eventStage.jpg",
  },
];

const WhyUnique = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="unique-section">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="unique-bg">
        <img
          src="/assets/images/crowd.jpg"
          alt="Crowd Celebration"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="unique-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="unique-header"
        >
          <h2>Why Heroes of Hyderabad is Unique</h2>
          <p>
            Our initiative stands out for its comprehensive approach to
            recognizing and celebrating local heroes.
          </p>
        </motion.div>

        <div className="unique-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <div className="feature-img-box">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-img"
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="cta"
        >
          <a href="#nominate" className="cta-btn">
            Join the Celebration
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyUnique;
