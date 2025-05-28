// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-center p-4 border-t text-sm text-gray-600 mt-10 dark:text-gray-400">
      © {new Date().getFullYear()} Whatbytes. All rights reserved.
    </footer>
  );
}
