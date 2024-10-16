"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartSideMenu = ({ isOpen, toggleCart }) => {
  const { cartItems, updateItemQuantity, removeItemFromCart } =
    useContext(CartContext);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
    >
      {/* Overlay */}
      <div
        className="w-full h-full bg-black opacity-50"
        onClick={toggleCart}
      ></div>
      {/* Side Menu */}
      <div className="w-96 bg-base-100 text-primary p-4 relative flex flex-col">
        {/* Cart Header */}
        <CartHeader toggleCart={toggleCart} />

        {/* Cart Content */}
        {cartItems.length > 0 ? (
          <>
            <div className="flex-grow overflow-y-auto">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateItemQuantity={updateItemQuantity}
                  removeItem={removeItemFromCart}
                  showImage={false}
                />
              ))}
            </div>
            {/* Cart Summary */}
            <CartSummary subtotal={subtotal} />
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartSideMenu;
