import { motion } from "framer-motion";
import "../styles/loadingScreen.css";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="loading-overlay"
    >
      <div className="loader-wrapper">
        {/* Outer Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="loader-ring outer"
        />

        {/* Inner Ring */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="loader-ring inner"
        />

        {/* Center Text */}
        <div className="loader-text-box">
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="loader-text"
          >
            HoH
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
