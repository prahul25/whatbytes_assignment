'use client'
import React from "react";
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
     <div>
      <Header onSearch={setSearchTerm} />
      <main className="px-6 py-4">
  {searchTerm && filteredProducts.length > 0 && (
    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
      🔍 Showing results for: <span className="font-medium">{searchTerm}</span>
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
      No products found matching <strong>&quot;{searchTerm}&quot;</strong>.
    </p>
  )}
</main>

      <Footer />
    </div>
  );
}


