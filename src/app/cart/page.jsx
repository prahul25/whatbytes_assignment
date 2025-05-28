// src/app/cart/page.jsx
"use client";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border p-4 mb-4 rounded dark:border-gray-700">
            <h2 className="font-semibold">{item.title}</h2>
            <p>₹{item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
