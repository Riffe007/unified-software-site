"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ExpertiseSection() {
  const expertiseAreas = [
    { title: "Computer Vision", href: "/expertise/computer-vision" },
    { title: "Natural Language Processing", href: "/expertise/nlp" },
    { title: "Reinforcement Learning", href: "/expertise/rl" },
    { title: "AI-Powered Security", href: "/expertise/security" },
    { title: "Energy Sector AI", href: "/expertise/energy" },
  ];

  return (
    <section className="py-16 text-center bg-gradient-to-r from-blue-900 to-black text-white">
      <motion.h2
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Expertise
      </motion.h2>
      <motion.p
        className="mt-4 text-lg opacity-80 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Transforming industries with AI-driven solutions in security, energy, automation, and beyond.
      </motion.p>

      {/* Expertise Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-xl bg-white/10 dark:bg-gray-800/40 
            backdrop-blur-lg shadow-lg transition-all duration-500 border border-gray-700 dark:border-gray-500"
          >
            <Link href={area.href} className="block">
              <h3 className="text-2xl font-semibold">{area.title}</h3>
              <p className="mt-2 text-gray-300">
                Explore how we leverage AI to drive innovation in {area.title}.
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-10">
        <Link href="/expertise" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium transition">
          View All Expertise →
        </Link>
      </div>
    </section>
  );
}
