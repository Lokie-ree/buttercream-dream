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
    <div className="min-h-screen flex flex-col mx-auto p-6 md:p-14 bg-base-100">
      {/* If cart is empty, show CartEmptyState */}
      {cartItems.length === 0 ? (
        <CartEmptyState />
      ) : (
        <div className="flex flex-col gap-6">
          {/* Cart Items Card */}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateItemQuantity={updateItemQuantity}
              removeItem={removeItemFromCart}
              showImage={true}
            />
          ))}
          {/* Cart Summary Card */}
          <CartSummary cartItems={cartItems} subtotal={subtotal} />
        </div>
      )}
    </div>
  );
}
