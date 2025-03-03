"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <footer
      className={`w-full py-8 transition-all duration-500 
      ${theme === "dark" 
        ? "bg-gradient-to-r from-blue-900 to-black text-white" 
        : "bg-white text-gray-900 shadow-md"}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Section: Logo + Branding */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image src="/logo.jpg" alt="Logo" width={64} height={64} className="object-cover" />
          </div>
          <p className="text-sm opacity-75">AI-Driven Innovation | Security | Intelligence</p>
        </div>

        {/* Right Section: Navigation + Social Links */}
        <div className="flex flex-col md:items-end items-center space-y-4 mt-4 md:mt-0">
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 dark:hover:text-blue-300 transition">About</Link>
            <Link href="/expertise" className="hover:text-gray-300 dark:hover:text-blue-300 transition">Expertise</Link>
            <Link href="/contact" className="hover:text-gray-300 dark:hover:text-blue-300 transition">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300 dark:hover:text-blue-300 transition">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" className="hover:text-gray-300 dark:hover:text-blue-300 transition">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="hover:text-gray-300 dark:hover:text-blue-300 transition">
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Centered Copyright */}
      <div className="text-center mt-6 text-sm opacity-75">
        &copy; {new Date().getFullYear()} Unified Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}
