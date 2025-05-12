import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/whyNow.css";

// import educators from "../assets/images/educators.jpg";
// import healthcare from "../assets/images/healthcare.jpg";
// import innovators from "../assets/images/innovators.jpg";
// import judgesSilhouettes from "../assets/images/judges.jpg";

const timelineEvents = [
  {
    year: "2024",
    title: "A New Era",
    description:
      "Hyderabad stands at the cusp of unprecedented growth and transformation.",
    image: "/assets/images/educators.svg",
  },
  {
    year: "2023",
    title: "Rising Momentum",
    description:
      "The city witnessed remarkable achievements in technology, healthcare, and education.",
    image: "/assets/images/healthcare.svg",
  },
  {
    year: "2022",
    title: "Foundation",
    description: "The seeds of innovation and community development were sown.",
    image: "/assets/images/innovators.svg",
  },
];

const WhyNow = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="why-section">
      {/* Background Parallax */}
      <motion.div style={{ y }} className="why-bg">
        <img
          src="/assets/images/judges.jpg"
          alt="Judges Silhouettes"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="why-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="why-header"
        >
          <h2>Why Now?</h2>
          <p>
            The time is ripe to recognize and celebrate the extraordinary
            individuals who are shaping Hyderabad’s future.
          </p>
        </motion.div>

        <div className="why-grid">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-card"
            >
              <div className="timeline-img-container">
                <img
                  src={event.image}
                  alt={event.title}
                  className="timeline-img"
                />
              </div>
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyNow;
