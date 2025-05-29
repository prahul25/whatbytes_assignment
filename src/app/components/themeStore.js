// src/store/themeStore.ts

import { create } from "zustand";


export const useThemeStore = create((set) => ({
  
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  setTheme: (theme) => set({ theme }),
}));
