// src/app/product/[id]/page.jsx
import products from "../../../data/products.json";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 h-auto rounded"
      />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-green-600 font-semibold my-2">₹{product.price}</p>
        <p className="mb-4">{product.description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
