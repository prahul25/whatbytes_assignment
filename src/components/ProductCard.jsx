"use client";

import Link from "next/link";
import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

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
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
