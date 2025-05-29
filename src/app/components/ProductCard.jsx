"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function ProductCard({ product }) {
  const {addToCart} = useCart()

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="w-full h-48 flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 rounded">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Link>
      <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
      <p className="text-green-600 font-bold">₹{product.price}</p>
      <button
  onClick={() =>
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      description: product.description,
      quantity: 1,
    })
  }
  className="mt-3  flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold text-sm px-4 py-2 rounded shadow-md transition-all duration-300 ease-in-out"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6H19M7 13l1.5-6H21"
    />
  </svg>
  Add to Cart
</button>

    </div>
  );
}
