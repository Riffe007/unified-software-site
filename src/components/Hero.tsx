import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-white"
      >
        AI-Powered Solutions for a Smarter Future
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-300 mt-4"
      >
        Leveraging AI, ML, and automation to solve complex challenges.
      </motion.p>
      <motion.a
        href="/contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
