import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (existing) {
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
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
            cart: [...state.cart, { ...product, quantity: 1 }],
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
      removeFromCart: (id) =>{
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
          
        }))
        toast.info(
  <span>
    Product removed from cart
  </span>
);

    },
        
      clearCart: () => {set({ cart: [] })
    toast(
  <span>
    Cart has been cleared.{" "}
  </span>,
  {
    icon: "🛒",
  }
);
    }
    }),
    {
      name: "cart-storage",
    }
  )
);
