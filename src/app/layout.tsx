import "../styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="">{children}</main> {/* Remove `pt-16` */}
        <Footer />
      </body>
    </html>
  );
}
