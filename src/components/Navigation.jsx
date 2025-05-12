import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.style.scrollMarginTop = "120px";
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "what-is-hoh", label: "What is HoH" },
    { id: "why-now", label: "Why Now" },
    { id: "who-nominate", label: "Who to Nominate" },
    { id: "why-unique", label: "Why Unique" },
    { id: "event-night", label: "Event Night" },
    { id: "nominate", label: "Nominate" },
    { id: "jury", label: "Jury" },
    { id: "guests", label: "Guests" },
    { id: "advisory", label: "Advisory" },
    { id: "sponsors", label: "Sponsors" },
  ];

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-left">
          <a href="/" className="logo-link">
            {!logoError ? (
              <img
                src="/assets/images/logo.png"
                alt="Heroes of Hyderabad"
                className="logo-img"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="fallback-logo">HoH</div>
            )}
          </a>
        </div>
        <div className="nav-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("nominate")}
            className="nominate-btn"
          >
            Nominate Now
          </motion.button>
        </div>
        <div className="nav-toggle">
          <button onClick={() => setIsOpen(!isOpen)} className="toggle-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <div className="mobile-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-link"
                >
                  {item.label}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("nominate")}
                className="mobile-nominate"
              >
                Nominate Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
