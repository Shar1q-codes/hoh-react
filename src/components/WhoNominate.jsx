import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/whoNominate.css";

// import eventStage from "../assets/images/eventStage.jpg";
// import communityLeaders from "../assets/images/leaders.jpg";
// import innovators from "../assets/images/innovators.jpg";
// import educators from "../assets/images/educators.jpg";
// import healthcare from "../assets/images/healthcare.jpg";

const categories = [
  {
    title: "Community Leaders",
    description:
      "Individuals who have made significant contributions to community development and social welfare.",
    image: "/assets/images/community-leaders.svg",
  },
  {
    title: "Innovators",
    description:
      "Visionaries who have brought groundbreaking innovations to Hyderabad.",
    image: "/assets/images/innovators.svg",
  },
  {
    title: "Educators",
    description:
      "Dedicated teachers and educational leaders shaping the future of our youth.",
    image: "/assets/images/educators.svg",
  },
  {
    title: "Healthcare Heroes",
    description:
      "Medical professionals and healthcare workers making a difference in people's lives.",
    image: "/assets/images/healthcare.svg",
  },
];

const WhoNominate = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="who-section">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="who-bg">
        <img
          src="/assets/images/eventStage.jpg"
          alt="Event Stage"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="who-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="who-header"
        >
          <h2>Who Can You Nominate?</h2>
          <p>
            Heroes of Hyderabad celebrates individuals across various sectors
            who have made exceptional contributions to our city.
          </p>
        </motion.div>

        <div className="who-grid">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="category-card"
            >
              <div className="category-img-box">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-img"
                />
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
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
          <a href="#nominate" className="nominate-btn">
            Nominate a Hero
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoNominate;
