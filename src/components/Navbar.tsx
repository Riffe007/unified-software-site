"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 shadow-md 
      ${theme === "dark" 
        ? "bg-gradient-to-r from-blue-900 to-black text-white" 
        : "bg-white text-gray-900"}`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo positioned to the left */}
        <Link href="/">
          <Image src="/logo.jpg" alt="Logo" width={120} height={40} className="cursor-pointer" />
        </Link>

        {/* Navigation Links & Theme Toggle */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-gray-300 dark:hover:text-blue-300 transition">About</Link>
            <Link href="/expertise" className="hover:text-gray-300 dark:hover:text-blue-300 transition">Expertise</Link>
            <Link href="/contact" className="hover:text-gray-300 dark:hover:text-blue-300 transition">Contact</Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md transition-all duration-300"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
