"use client";

import { createContext, useState, useEffect } from "react";
import {
  addItemToCart as addItemToCartFunction,
  removeItemFromCart as removeItemFromCartFunction,
  updateItemQuantity as updateItemQuantityFunction,
  clearCart as clearCartFunction,
  getTotalPrice as getTotalPriceFunction,
} from "./cartFunctions";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load Cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    console.log("Loading cart items from localStorage:", storedCart);

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    console.log("Updating localStorage with cart items:", cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => addItemToCartFunction(prevCartItems, item));
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      removeItemFromCartFunction(prevCartItems, itemId)
    );
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCartItems((prevCartItems) =>
      updateItemQuantityFunction(prevCartItems, itemId, quantity)
    );
  };

  const clearCart = () => {
    setCartItems(clearCartFunction());
  };

  const getTotalPrice = () => {
    return getTotalPriceFunction(cartItems);
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCart,
    getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
