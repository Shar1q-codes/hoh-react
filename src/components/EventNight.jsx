import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/eventNight.css";

// import eventStage from "../assets/images/eventStage.jpg";
// import crowdCelebration from "../assets/images/crowd.jpg";
// import communityLeaders from "../assets/images/leaders.jpg";

const eventDetails = [
  {
    title: "Grand Ceremony",
    description: "A prestigious awards ceremony honoring our city's heroes.",
    image: "/assets/images/event-stage.svg",
  },
  {
    title: "Networking",
    description: "Connect with like-minded individuals and community leaders.",
    image: "/assets/images/crowd-celebration.svg",
  },
  {
    title: "Celebration",
    description: "An evening of celebration, inspiration, and recognition.",
    image: "/assets/images/community-leaders.svg",
  },
];

const EventNight = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="event-section">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="event-bg">
        <img
          src="/assets/images/eventStage.jpg"
          alt="Event Stage"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="event-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="event-header"
        >
          <h2>The Event Night</h2>
          <p>
            Join us for an unforgettable evening celebrating Hyderabad’s finest
            heroes.
          </p>
        </motion.div>

        <div className="event-grid">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="event-card"
            >
              <div className="event-img-box">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="event-img"
                />
              </div>
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
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
            Get Your Tickets
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventNight;
