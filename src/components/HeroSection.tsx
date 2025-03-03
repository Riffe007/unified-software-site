"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <section
      className={`relative min-h-screen flex flex-col justify-center items-center text-center 
      transition-all duration-500 ${theme === "dark" ? "bg-gradient-to-r from-blue-900 to-black text-white" : "bg-white text-blue-900"}`}
    >
      {/* Animated Text */}
      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI-Powered Innovation for Your Business
      </motion.h1>

      <motion.p 
        className="mt-4 text-lg md:text-2xl opacity-80 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Harness the power of AI, Computer Vision, NLP, and Reinforcement Learning to transform your industry.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <motion.div 
        className="mt-8 flex space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/expertise" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium transition">
          Explore Expertise
        </Link>
        <Link href="/contact" className="px-6 py-3 border border-white rounded-md text-lg font-medium transition hover:bg-white hover:text-black">
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
