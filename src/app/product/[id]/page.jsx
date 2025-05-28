"use client";

import products from "../../../data/products.json"
import { useState } from "react";
import { useCartStore } from "../../../store/cartStore";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.id === params.id);
  const addToCart = useCartStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(0);

  if (!product) {
    return (
      <div className="text-center text-red-500 text-lg mt-20">
        Product not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(quantity,"quntity")
    addToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[400px] w-auto object-contain rounded shadow-md"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-sm text-gray-500 mb-2 capitalize">
          Category: <span className="font-medium">{product.category}</span>
        </p>
        <p className="text-green-600 text-2xl font-bold mb-4">₹{product.price}</p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          {product.description}
        </p>

        {/* Quantity Selector */}
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

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-semibold transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
