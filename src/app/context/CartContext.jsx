// src/context/CartContext.jsx
"use client";

import React, { createContext, useContext, useReducer } from "react";
import { toast } from "sonner";

const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, { ...action.payload }];
    }
    case "REMOVE_FROM_CART": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "DECREMENT_QUANTITY": {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        return state.map((p) =>
          p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
      return state.filter((item) => item.id !== action.payload);
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

const addToCart = (product) => {
  const quantity = product.quantity || 1;
  if (quantity <= 0) {
    toast.error("Quantity must be at least 1 to add to cart.");
    return;
  }

  const isExisting = cart.find((item) => item.id === product.id);

  dispatch({ type: "ADD_TO_CART", payload: product });

  if (isExisting) {
    toast.success("Product quantity updated in cart");
  } else {
    toast.success("Product added to cart");
  }
};


  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.info("Product removed from cart");
  };

  const decrementFromCart = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast("Cart has been cleared", { icon: "🛒" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decrementFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
