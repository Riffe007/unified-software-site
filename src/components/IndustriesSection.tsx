"use client";
import { motion } from "framer-motion";

export default function IndustriesSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-black text-white text-center">
      <h2 className="text-4xl font-bold">Solving Complex Problems Across Industries</h2>
      <p className="mt-4 text-lg opacity-80">We develop AI solutions for cutting-edge applications.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {[
          { title: "🛡️ Defense & Government", description: "AI-driven surveillance & cybersecurity for national security." },
          { title: "🏥 Healthcare & Biotech", description: "Medical AI solutions & secure patient record management." },
          { title: "🏢 Enterprise AI", description: "Scalable AI for automation, customer service, and growth." },
          { title: "⚡ Energy", description: "Optimizing smart grids, predictive maintenance & AI solutions." }
        ].map((industry, index) => (
          <motion.div 
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold">{industry.title}</h3>
            <p className="mt-2 text-gray-300">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
