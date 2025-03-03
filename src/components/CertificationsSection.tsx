"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
  { src: "/images/Service-Disabled Veteran-Owned-Certified-sm.jpg", alt: "SDVOSB Certified" },
  { src: "/images/nvidia-inception-program-badge-rgb-for-screen.jpg", alt: "NVIDIA Inception Program" },
  { src: "/images/MS_Startups_Celebration_Badge_Light.png", alt: "Microsoft for Startups" },
  { src: "/images/Activate-Logo_color.png", alt: "AWS Activate" },
];

export default function CertificationsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-black text-white text-center">
      <h2 className="text-4xl font-bold">Our Certifications & Partnerships</h2>
      <p className="mt-4 text-lg opacity-80">We are recognized by industry leaders for our innovation and excellence.</p>

      <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className="p-4 bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <Image src={cert.src} alt={cert.alt} width={250} height={100} className="object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
