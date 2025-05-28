import { Toaster } from "sonner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Whatbytes Shop",
  description: "A product listing app for Whatbytes assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white transition-colors`}>
        <ThemeProvider>
          <Toaster richColors />
          <main className="min-h-screen px-4 py-6">{children}</main>
  
        </ThemeProvider>
      </body>
    </html>
  );
}
