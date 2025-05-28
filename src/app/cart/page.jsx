// src/app/cart/page.jsx
"use client";

import { useCartStore } from "../../store/cartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-4 rounded dark:border-gray-700"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>₹{item.price} × {item.quantity}</p>
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
