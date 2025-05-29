// src/store/themeStore.ts

import { create } from "zustand";


export const useThemeStore = create((set) => ({
  theme: typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

