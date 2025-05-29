import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-auto text-center p-4 border-t text-sm text-gray-600 dark:text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        {/* Social media icons */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500" />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Whatbytes. All rights reserved.
      </p>
    </footer>
  );
}
