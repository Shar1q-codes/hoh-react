import { useEffect, useState } from "react";
import "../styles/navigation.css";

const Navigation = () => {
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
  };

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Left Links */}
        <div className="nav-left">
          <div className="nav-item">
            <div className="dot" />
            <button
              className="nav-link"
              onClick={() => scrollToSection("jury")}
            >
              Jury
            </button>
          </div>
          <div className="nav-item">
            <div className="dot" />
            <button
              className="nav-link"
              onClick={() => scrollToSection("guests")}
            >
              Guests
            </button>
          </div>
        </div>

        {/* Center Logo */}
        <div className="nav-center">
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

        {/* Right Links */}
        <div className="nav-right">
          <div className="nav-item">
            <div className="dot" />
            <button
              className="nav-link"
              onClick={() => scrollToSection("advisory")}
            >
              Advisory
            </button>
          </div>
          <div className="nav-item">
            <div className="dot" />
            <button
              className="nav-link"
              onClick={() => scrollToSection("sponsors")}
            >
              Sponsors
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
