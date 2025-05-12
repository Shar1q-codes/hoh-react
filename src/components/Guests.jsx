import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/guests.css";

// import eventStage from "../assets/images/eventStage.jpg";
// import guest1 from "../assets/images/guest1.jpg";
// import guest2 from "../assets/images/guest2.jpg";
// import guest3 from "../assets/images/guest3.jpg";

const specialGuests = [
  {
    name: "Dr. Rahul Verma",
    role: "Chief Guest",
    bio: "Renowned social activist and former UN Goodwill Ambassador.",
    image: "/assets/images/guest-1.svg",
  },
  {
    name: "Priya Sharma",
    role: "Guest of Honor",
    bio: "Award-winning journalist and documentary filmmaker.",
    image: "/assets/images/guest-2.svg",
  },
  {
    name: "Dr. Maya Patel",
    role: "Keynote Speaker",
    bio: "Leading expert in sustainable urban development.",
    image: "/assets/images/guest-3.svg",
  },
];

const Guests = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="guests-section">
      {/* Background Parallax */}
      <motion.div style={{ y }} className="guests-bg">
        <img
          src="/assets/images/eventStage.jpg"
          alt="Event Stage"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="guests-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="guests-header"
        >
          <h2>Special Guests</h2>
          <p>
            Join us in welcoming our distinguished guests who will grace the
            ceremony.
          </p>
        </motion.div>

        <div className="guests-grid">
          {specialGuests.map((guest, index) => (
            <motion.div
              key={guest.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="guest-card"
            >
              <div className="guest-img-box">
                <img src={guest.image} alt={guest.name} className="guest-img" />
              </div>
              <h3>{guest.name}</h3>
              <p className="guest-role">{guest.role}</p>
              <p>{guest.bio}</p>
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

export default Guests;
