// src/components/ThemeProvider.jsx or .tsx

"use client";

import { useEffect } from "react";
import { useThemeStore } from "./themeStore";


export const ThemeProvider = ({ children }) => {
  const { theme } = useThemeStore()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      console.log("Current theme:", theme); // ✅ DEBUG LINE
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme]);

  return <>{children}</>;
};
