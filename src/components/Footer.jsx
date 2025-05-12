import { motion } from "framer-motion";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="footer-column"
          >
            <h3>Heroes of Hyderabad</h3>
            <p>
              Celebrating the extraordinary individuals who make our city
              extraordinary.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="footer-column"
          >
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#what-is-hoh">About</a>
              </li>
              <li>
                <a href="#nominate-now">Nominate</a>
              </li>
              <li>
                <a href="#event-night">Event</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="footer-column"
          >
            <h4>Contact</h4>
            <ul>
              <li>Email: info@heroesofhyderabad.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Hyderabad, Telangana</li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="footer-column"
          >
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="footer-bottom"
        >
          <p>© {currentYear} Heroes of Hyderabad. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
