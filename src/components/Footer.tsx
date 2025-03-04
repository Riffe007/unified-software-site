"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-blue-900 to-black text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
            <Image src="/logo.jpg" alt="Logo" width={64} height={64} />
          </div>
          <p className="text-sm opacity-75">AI-Driven Innovation | Security | Intelligence</p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-end space-y-4">
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="hover:text-blue-300 transition">About</Link>
            <Link href="/expertise" className="hover:text-blue-300 transition">Expertise</Link>
            <Link href="/contact" className="hover:text-blue-300 transition">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#"><FaLinkedin size={24} /></Link>
            <Link href="#"><FaTwitter size={24} /></Link>
            <Link href="#"><FaInstagram size={24} /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm opacity-75">
        &copy; {new Date().getFullYear()} Unified Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}
