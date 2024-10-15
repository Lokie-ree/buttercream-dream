// components/layout/CartSideMenu.jsx

"use client";

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantitySelector from "../ui/QuantitySelector";
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5";
import Link from "next/link";

const CartSideMenu = ({ isOpen, toggleCart }) => {
  const { cartItems, updateItemQuantity, removeItemFromCart } =
    useContext(CartContext);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Overlay */}
      <div
        className="w-full h-full bg-black opacity-50"
        onClick={toggleCart}
      ></div>
      {/* Side Menu */}
      <div className="w-96 bg-base-100 text-primary p-4 relative flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={toggleCart}
          aria-label="Close Cart"
        >
          <IoCloseOutline size={32} className="hover:text-neutral" />
        </button>
        {/* Cart Content */}
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="flex flex-col flex-grow">
            <div className="flex-grow overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-4 border-b pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="font-semibold truncate">{item.name}</p>
                      {item.variant && item.variant.variantName && (
                        <p className="text-sm text-gray-500">
                          {item.variant.variantName}
                        </p>
                      )}
                      <p className="text-sm font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    {/* Remove Item Button */}
                  </div>
                  {/* Quantity Selector and Price */}
                  <div className="flex justify-between items-center mt-2">
                    <QuantitySelector
                      quantity={item.quantity}
                      onQuantityChange={(newQuantity) =>
                        updateItemQuantity(item.id, newQuantity)
                      }
                      className="w-20 h-8 text-sm text-center"
                    />
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className="btn btn-xs btn-ghost"
                      aria-label="Remove Item"
                    >
                      <IoTrashOutline
                        size={22}
                        className="text-accent hover:text-error"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Subtotal and Actions */}
            <div className="mt-4">
              <p className="text-lg font-bold">
                Subtotal: $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <Link href="/cart">
                <button className="btn btn-accent btn-block text-base-100 mt-2 hover:bg-neutral hover:text-primary">
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartSideMenu;
