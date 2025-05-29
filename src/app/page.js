"use client";

import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import products from "../data/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
const [priceRange, setPriceRange] = useState(30000); // Set initial max price

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category.toLowerCase() === selectedCategory.toLowerCase()
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => product.price <= priceRange);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={setSearchTerm} />
      <div className="flex px-6 py-4">
        {/* Sidebar Filters */}
       <aside className="w-1/4 pr-4 hidden md:block">
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border dark:border-gray-700">
    <h3 className="text-xl font-bold mb-4">Filters</h3>

    {/* Category Filter */}
    <div className="mb-6">
      <h4 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Category</h4>
      <div className="space-y-2">
        {["All", "Electronics", "Wearables", "Household"].map((category) => (
          <label key={category} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mr-2 accent-blue-600"
            />
            {category}
          </label>
        ))}
      </div>
    </div>

    {/* Price Filter */}
    <div>
      <h4 className="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Price Range</h4>
      <p className="text-sm mb-1 text-gray-500 dark:text-gray-400">Up to ₹{priceRange}</p>
      <input
        type="range"
        min="0"
        max="30000"
        step="100"
        value={priceRange}
        onChange={(e) => setPriceRange(Number(e.target.value))}
        className="w-full accent-blue-600"
      />
    </div>
  </div>
</aside>


        {/* Product Listing */}
        <main className="flex-1">
          {searchTerm && filteredProducts.length > 0 && (
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              🔍 Showing results for:{" "}
              <span className="font-medium">{searchTerm}</span>
            </p>
          )}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
              No products found matching{" "}
              <strong>&quot;{searchTerm}&quot;</strong>.
            </p>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
