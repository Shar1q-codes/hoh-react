"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxWrapper = ({ children, speed = 0.5, className = "" }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // You may tweak this later
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`relative min-h-[100vh] sm:min-h-[80vh] md:min-h-[70vh] ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
