import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/advisory.css";

// import judgesSilhouettes from "../assets/images/judges.jpg";
// import advisory1 from "../assets/images/advisory1.jpg";
// import advisory2 from "../assets/images/advisory2.jpg";
// import advisory3 from "../assets/images/advisory3.jpg";
// import advisory4 from "../assets/images/advisory4.jpg";

const advisoryBoard = [
  {
    name: "Dr. Sarah Johnson",
    role: "Education Expert",
    bio: "Leading educational reform initiatives in Hyderabad for over 15 years.",
    image: "/assets/images/advisory-1.svg",
  },
  {
    name: "Rajesh Kumar",
    role: "Tech Innovator",
    bio: "Pioneering sustainable technology solutions for urban development.",
    image: "/assets/images/advisory-2.svg",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Healthcare Leader",
    bio: "Transforming healthcare accessibility in underserved communities.",
    image: "/assets/images/advisory-3.svg",
  },
  {
    name: "Amit Patel",
    role: "Social Entrepreneur",
    bio: "Creating impactful social enterprises that address local challenges.",
    image: "/assets/images/advisory-4.svg",
  },
];

const Advisory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="advisory-section">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="advisory-bg">
        <img
          src="/assets/images/judges.jpg"
          alt="Judges Silhouettes"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="advisory-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="advisory-header"
        >
          <h2>Advisory Board</h2>
          <p>
            Our advisory board consists of distinguished experts who guide our
            initiative.
          </p>
        </motion.div>

        <div className="advisory-grid">
          {advisoryBoard.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="advisory-card"
            >
              <div className="advisory-img-box">
                <img
                  src={member.image}
                  alt={member.name}
                  className="advisory-img"
                />
              </div>
              <h3>{member.name}</h3>
              <p className="advisory-role">{member.role}</p>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Advisory;
