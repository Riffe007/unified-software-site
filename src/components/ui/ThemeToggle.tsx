"use client";

import { useAtom } from "jotai";
import { themeAtom } from "@/lib/theme";
import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg transition-all duration-200 bg-gray-200 dark:bg-gray-700"
    >
      {theme === "dark" ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-900" />}
    </button>
  );
}
