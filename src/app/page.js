import Product from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  
  return (
    <footer className="text-center p-4 border-t text-sm text-red-900 mt-10">
      © {new Date().getFullYear()} Whatbytes. All rights reserved.
      <Product/>
    </footer>
  );
}


