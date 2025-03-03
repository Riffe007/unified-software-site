"use client";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-black to-blue-900 text-white text-center">
      <motion.h2 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Mission
      </motion.h2>
      <p className="mt-4 text-lg opacity-80 max-w-3xl mx-auto">
        To empower businesses with cutting-edge AI solutions that drive innovation, security, and scalability.
      </p>
    </section>
  );
}
