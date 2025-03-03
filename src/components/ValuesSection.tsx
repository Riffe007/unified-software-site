"use client";
import { motion } from "framer-motion";

const values = [
  { title: "Innovation", description: "We push boundaries to create AI solutions that transform industries." },
  { title: "Integrity", description: "Our commitment to ethical AI ensures responsible, transparent solutions." },
  { title: "Security", description: "We build AI with security-first principles to protect data and infrastructure." },
  { title: "Excellence", description: "We deliver high-quality, scalable AI solutions tailored for impact." },
];

export default function ValuesSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-black text-white text-center">
      <h2 className="text-4xl font-bold">Our Core Values</h2>
      <p className="mt-4 text-lg opacity-80">The foundation of everything we do.</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{value.title}</h3>
            <p className="mt-2 text-gray-300">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
