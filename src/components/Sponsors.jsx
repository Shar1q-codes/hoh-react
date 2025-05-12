import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/sponsors.css";

// import sponsor1 from "../assets/images/sponsor-1.svg"; // Adjust the path as needed
// import sponsor2 from "../assets/images/sponsor-2.svg";
// import sponsor3 from "../assets/images/sponsor-3.svg";
// import sponsor4 from "../assets/images/sponsor-4.svg";
// import sponsor5 from "../assets/images/sponsor-5.svg";
// import sponsor6 from "../assets/images/sponsor-6.svg";

const sponsors = [
  {
    name: "TechCorp",
    category: "Platinum Sponsor",
    logo: "/assets/images/sponsor-1.svg",
  },
  {
    name: "Global Industries",
    category: "Gold Sponsor",
    logo: "/assets/images/sponsor-2.svg",
  },
  {
    name: "City Bank",
    category: "Silver Sponsor",
    logo: "/assets/images/sponsor-3.svg",
  },
  {
    name: "Innovate Solutions",
    category: "Bronze Sponsor",
    logo: "/assets/images/sponsor-4.svg",
  },
  {
    name: "Future Group",
    category: "Bronze Sponsor",
    logo: "/assets/images/sponsor-5.svg",
  },
  {
    name: "Heritage Foundation",
    category: "Bronze Sponsor",
    logo: "/assets/images/sponsor-6.svg",
  },
];

// Framer-motion animation presets
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Sponsors = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={ref} className="sponsors-section" id="sponsors">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="sponsors-header"
        >
          <h2>Our Sponsors</h2>
          <p>
            Proudly supported by leading organizations committed to community
            development
          </p>
        </motion.div>

        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="sponsor-card"
            >
              <div className="sponsor-img-box">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="sponsor-img"
                />
              </div>
              <div className="sponsor-info">
                <h3>{sponsor.name}</h3>
                <p>{sponsor.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          className="sponsor-cta"
        >
          <h3>Become a Sponsor</h3>
          <p>
            Join us in recognizing and celebrating Hyderabad’s heroes. Contact
            us to learn about sponsorship opportunities.
          </p>
          <button>Contact Us</button>
        </motion.div>
      </div>

      <motion.div style={{ y, opacity }} className="sponsor-background" />
    </section>
  );
};

export default Sponsors;
