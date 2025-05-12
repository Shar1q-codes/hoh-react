import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/jury.css";

// import judgesSilhouettes from "../assets/images/judges.jpg";
// import jury1 from "../assets/images/jury1.jpg";
// import jury2 from "../assets/images/jury2.jpg";
// import jury3 from "../assets/images/jury3.jpg";
// import jury4 from "../assets/images/jury4.jpg";
// import jury5 from "../assets/images/jury5.jpg";

const juryMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Education Expert",
    bio: "Leading educational reform initiatives in Hyderabad for over 15 years.",
    image: "/assets/images/jury-1.svg",
  },
  {
    name: "Rajesh Kumar",
    role: "Tech Innovator",
    bio: "Pioneering sustainable technology solutions for urban development.",
    image: "/assets/images/jury-2.svg",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Healthcare Leader",
    bio: "Transforming healthcare accessibility in underserved communities.",
    image: "/assets/images/jury-3.svg",
  },
  {
    name: "Amit Patel",
    role: "Social Entrepreneur",
    bio: "Creating impactful social enterprises that address local challenges.",
    image: "/assets/images/jury-4.svg",
  },
  {
    name: "Meera Reddy",
    role: "Cultural Ambassador",
    bio: "Preserving and promoting Hyderabad's rich cultural heritage.",
    image: "/assets/images/jury-5.svg",
  },
];

const Jury = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="jury-section">
      {/* Background with Parallax */}
      <motion.div style={{ y }} className="jury-bg">
        <img
          src="/assets/images/judges.jpg"
          alt="Judges Silhouettes"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="jury-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="jury-header"
        >
          <h2>Our Jury</h2>
          <p>
            Meet the distinguished panel of experts who will evaluate and select
            our heroes.
          </p>
        </motion.div>

        <div className="jury-grid">
          {juryMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="jury-card"
            >
              <div className="jury-img-box">
                <img
                  src={member.image}
                  alt={member.name}
                  className="jury-img"
                />
              </div>
              <h3>{member.name}</h3>
              <p className="jury-role">{member.role}</p>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Jury;
