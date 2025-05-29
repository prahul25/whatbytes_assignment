"use client";

import { useCart } from "@/app/context/CartContext";
import CartHeader from "../components/CartHeader";

export default function CartPage() {
 const { cart, addToCart, removeFromCart, decrementFromCart } = useCart();
console.log("Cart in CartPage:", cart); // ✅ place here
  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(cart,"CART")
  return (
    <div>
      <CartHeader/>
    
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center gap-6 border p-4 rounded-lg shadow-sm dark:border-gray-700"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain rounded"
                />

                <div className="flex-1 w-full">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    Category: {item.category}
                  </p>
                  <p className="text-green-600 font-bold mt-1">
                    Price: ₹{item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => decrementFromCart(item.id)}
                      className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
                    >
                      −
                    </button>


                    <span className="text-md font-medium">{item.quantity}</span>

                    <button
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          image: item.image,
                          category: item.category,
                          description: item.description,
                          quantity: 1, // ✅ always use a clean payload
                        })
                      }
                      className="px-3 py-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
                    >
                      +
                    </button>

                    <span className="ml-4 text-sm text-gray-600 dark:text-gray-300">
                      Total: ₹{item.price * item.quantity}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 text-red-500 hover:underline text-sm"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="mt-10 border-t pt-6 text-right">
            <h2 className="text-xl font-bold">
              🧾 Checkout Total: ₹{getTotal()}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              (Inclusive of all taxes)
            </p>
          </div>
        </>
      )}
    </div>
    </div>
  );
}
