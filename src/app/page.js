"use client";

import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <div className="space-y-2">
            <label className="block">
              <input
                type="radio"
                name="category"
                value="All"
                checked={selectedCategory === "All"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              All
            </label>
            <label className="block">
              <input
                type="radio"
                name="category"
                value="Electronics"
                checked={selectedCategory === "Electronics"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              Electronics
            </label>
            <label className="block">
              <input
                type="radio"
                name="category"
                value="Wearables"
                checked={selectedCategory === "Wearables"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              Wearables
            </label>
            <label className="block">
              <input
                type="radio"
                name="category"
                value="Household"
                checked={selectedCategory === "Household"}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              Household
            </label>
          </div>
           <div className="mb-6">
    <label className="block font-semibold mb-1">Price Range: ₹{priceRange}</label>
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
