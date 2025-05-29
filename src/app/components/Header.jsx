"use client";

import { ShoppingCart, User, Sun, Moon } from "lucide-react";

import { useEffect, useState } from "react";
import { useThemeStore } from "./themeStore";
import Link from "next/link";

export default function Header({ onSearch }) {
  const { theme, toggleTheme } = useThemeStore()

  // Rotating placeholder logic
  const placeholders = [
    "Search Wireless Headphones...",
    "Search Smart Watch...",
    "Search Smartphone...",
    "Search Nike shoes...",
    "Search Thermo bottles...",
    "Search Ear buds...",
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderText, setPlaceholderText] = useState(placeholders[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPlaceholderText(placeholders[placeholderIndex]);
  }, [placeholderIndex]);

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-10 transition">
      <div className="text-xl font-bold">Whatbytes</div>
      <input
        type="text"
        placeholder={placeholderText}
        className="border p-2 rounded w-1/2 dark:bg-gray-700 dark:text-white"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? <Moon /> : <Sun />}
        </button>

        <Link href="/cart" aria-label="Cart">
          <ShoppingCart className="cursor-pointer" />
        </Link>
        <User />
      </div>
    </header>
  );
}
