"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-900 to-black text-white text-center">
      <motion.h2 className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Partner With AI Experts Who Deliver Real Results
      </motion.h2>
      <p className="mt-4 text-lg opacity-80">Let’s build the future together.</p>
      
      <motion.div className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-medium transition">
          Schedule a Consultation
        </Link>
      </motion.div>
    </section>
  );
}
