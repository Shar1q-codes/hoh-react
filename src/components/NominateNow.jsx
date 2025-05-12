import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/nominateNow.css";

// import crowdCelebration from "../assets/images/crowd.jpg";

const NominateNow = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    organization: "",
    phone: "",
    email: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    about: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div ref={containerRef} className="nominate-section">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="nominate-bg">
        <img
          src="/assets/images/crowd.jpg"
          alt="Crowd Celebration"
          className="bg-img"
        />
        <div className="bg-gradient" />
      </motion.div>

      {/* Form Content */}
      <motion.div style={{ opacity }} className="nominate-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="nominate-header"
        >
          <h2>Nominate a Hero</h2>
          <p>
            Help us recognize the extraordinary individuals who make Hyderabad a
            better place.
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="nominate-form"
        >
          {/* Required Fields */}
          <div className="form-grid two-cols">
            <div className="form-group">
              <label>
                Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Designation <span>*</span>
              </label>
              <input
                type="text"
                name="designation"
                required
                placeholder="Enter designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Organization <span>*</span>
              </label>
              <input
                type="text"
                name="organization"
                required
                placeholder="Enter organization name"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Phone <span>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                Email <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Optional Fields */}
          <div className="form-grid three-cols">
            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn profile URL"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Instagram</label>
              <input
                type="url"
                name="instagram"
                placeholder="Instagram profile URL"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Facebook</label>
              <input
                type="url"
                name="facebook"
                placeholder="Facebook profile URL"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* About */}
          <div className="form-group">
            <label>
              About You <span>*</span>
            </label>
            <textarea
              name="about"
              rows="4"
              required
              placeholder="Tell us about yourself and your contributions"
              value={formData.about}
              onChange={handleChange}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="submit-btn"
          >
            Submit Nomination
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default NominateNow;
