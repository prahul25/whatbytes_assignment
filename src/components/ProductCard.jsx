// src/components/ProductCard.jsx
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700 transition">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded cursor-pointer"
        />
      </Link>
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">₹{product.price}</p>
      <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
        Add to Cart
      </button>
    </div>
  );
}
