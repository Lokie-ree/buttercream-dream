"use client";

import React, { useContext } from "react";
import CartEmptyState from "@/components/cart/CartEmptyState";
import CartSummary from "@/components/cart/CartSummary";
import CartItem from "@/components/cart/CartItem";
import { CartContext } from "@/components/context/CartContext";

export default function CartPage() {
  const { cartItems, updateItemQuantity, removeItemFromCart } =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container min-h-screen mx-auto p-6 md:p-12 bg-base-100">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-accent mb-6 md:mb-10">
        Your Shopping Cart
      </h1>
      {/* If cart is empty, show CartEmptyState */}
      {cartItems.length === 0 ? (
        <CartEmptyState />
      ) : (
        <div className="flex flex-col justify-between gap-6">
          {/* Cart Items Card */}
          <div className="flex-grow">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateItemQuantity={updateItemQuantity}
                removeItem={removeItemFromCart}
                showImage={true}
              />
            ))}
          </div>
          {/* Cart Summary Card */}
          <div className="w-full">
            <CartSummary subtotal={subtotal} />
          </div>
          {/* Link to Checkout */}
        </div>
      )}
    </div>
  );
}
