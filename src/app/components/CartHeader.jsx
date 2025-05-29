"use client";

import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function CartHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-6 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-10 transition">
      <div className="text-xl font-bold">Whatbytes</div>
    
      <div className="flex items-center space-x-4">
       

        <Link
        href="/"
        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
      >
        <ArrowLeftCircle className="w-6 h-6" />
        Back to Shop
      </Link>
      </div>
    </header>
   
  );
}
