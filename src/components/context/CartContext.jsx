"use client";

import { createContext, useState, useEffect } from "react";
import {
  addItemToCart as addItemToCartFunction,
  removeItemFromCart as removeItemFromCartFunction,
  updateItemQuantity as updateItemQuantityFunction,
  clearCart as clearCartFunction,
  getSubtotal as getSubtotalFunction,
} from "./cartFunctions";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load Cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
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

  const getSubtotal = () => {
    return getSubtotalFunction(cartItems);
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCart,
    getSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
