import React, { createContext, useContext, useState } from "react";

export interface CartItem {
  name: string;
  price: string;
  image: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increment: (idx: number) => void;
  decrement: (idx: number) => void;
  remove: (idx: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      // If item with same name and color exists, increase quantity
      const idx = prev.findIndex(
        (i) => i.name === item.name && i.color === item.color
      );
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].quantity += 1;
        return updated;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increment = (idx: number) => {
    setCart((prev) => prev.map((item, i) =>
      i === idx ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (idx: number) => {
    setCart((prev) => prev.map((item, i) =>
      i === idx && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const remove = (idx: number) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement, remove }}>
      {children}
    </CartContext.Provider>
  );
};
