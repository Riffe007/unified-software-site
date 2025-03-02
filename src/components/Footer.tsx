import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Logo & Company Info */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="Unified Software Solutions" width={50} height={50} className="rounded-full shadow-md" />
          <div>
            <h2 className="text-xl font-bold">Unified Software Solutions</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI-Driven Innovation & Technology</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6">
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/expertise" className="footer-link">Expertise</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
          <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Unified Software Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
