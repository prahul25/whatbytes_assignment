"use client";

import { useParams } from "next/navigation"; // ✅ get dynamic route param
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import products from "../../../data/products.json";
import { useState, useEffect } from "react";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams(); // ✅ use hook for dynamic route
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  if (!product) {
    return (
      <div className="text-center text-red-500 text-lg mt-20">
        Product not found or loading...
      </div>
    );
  }

  return (
    <>
      {/* ✅ Custom Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-10 transition">
        <Link href="/" className="text-xl font-bold cursor-pointer">
          Whatbytes
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/cart" aria-label="Cart">
            <ShoppingCart className="cursor-pointer" />
          </Link>
          <User />
        </div>
      </header>

      {/* ✅ Product Detail */}
      <div className="flex flex-col md:flex-row gap-10 p-6">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] w-auto object-contain rounded shadow-md"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-2 capitalize">
            Category: <span className="font-medium">{product.category}</span>
          </p>
          <p className="text-green-600 text-2xl font-bold mb-4">₹{product.price}</p>
          <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 p-2 border rounded dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-semibold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
