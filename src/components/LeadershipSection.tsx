"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const leadership = [
  { name: "Timothy Riffe", role: "Founder & CEO", image: "/images/founder.jpg" },
  { name: "Kenneth Stowell", role: "CFO", image: "/images/ken.jpg" },
];

export default function LeadershipSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-black to-blue-900 text-white text-center">
      <h2 className="text-4xl font-bold">Meet Our Leadership</h2>
      <p className="mt-4 text-lg opacity-80">Experienced professionals driving AI innovation.</p>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {leadership.map((leader, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-800 rounded-lg shadow-lg w-80 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src={leader.image} alt={leader.name} width={160} height={160} className="object-cover" />
            </div>
            <h3 className="text-2xl font-semibold">{leader.name}</h3>
            <p className="text-gray-300">{leader.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
