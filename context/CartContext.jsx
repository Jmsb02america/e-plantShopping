import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((item) => item.id === plant.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== plantId)
    );
  };

  const incrementQuantity = (plantId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (plantId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === plantId
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
