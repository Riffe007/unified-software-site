"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="Unified Software Solutions" width={40} height={40} className="rounded-full shadow-md" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Unified Software</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/expertise" className="nav-link">Expertise</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900 dark:text-white">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-gray-800 py-4 space-y-4"
        >
          <Link href="/about" className="block text-center nav-link">About</Link>
          <Link href="/expertise" className="block text-center nav-link">Expertise</Link>
          <Link href="/contact" className="block text-center nav-link">Contact</Link>
          <div className="flex justify-center"><ThemeToggle /></div>
        </motion.div>
      )}
    </nav>
  );
}
