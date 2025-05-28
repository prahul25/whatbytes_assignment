import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
  const { quantity = 1 } = product; // use 1 only if quantity is undefined

  if (quantity <= 0) {
    toast.error("Quantity must be at least 1 to add to cart.");
    return;
  }

  const existing = get().cart.find((item) => item.id === product.id);

  if (existing) {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ),
    }));
    toast.success(
      <span>
        Product quantity updated.{" "}
        <a
          href="/cart"
          className="underline text-blue-500 hover:text-blue-700"
        >
          Go to cart
        </a>
      </span>
    );
  } else {
    set((state) => ({
      cart: [...state.cart, { ...product, quantity }],
    }));
    toast.success(
      <span>
        Product added to cart.{" "}
        <a
          href="/cart"
          className="underline text-blue-500 hover:text-blue-700"
        >
          View cart
        </a>
      </span>
    );
  }
},


      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
        toast.info("Product removed from cart.");
      },

      clearCart: () => {
        set({ cart: [] });
        toast("Cart has been cleared.", { icon: "🛒" });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
