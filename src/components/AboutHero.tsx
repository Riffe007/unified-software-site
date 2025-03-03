"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 to-black text-white">
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Unified Software Solutions
      </motion.h1>
      <motion.p 
        className="mt-4 text-lg md:text-2xl opacity-80 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Pioneering AI-driven solutions with innovation, security, and intelligence.
      </motion.p>
    </section>
  );
}
