import React, { useState, useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartSideMenu from "./CartSideMenu";

const CartIcon = () => {
  const { cartItems, getSubtotal } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const subtotal = getSubtotal();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <button
        onClick={toggleCart}
        aria-label="Cart Icon"
        className="btn btn-ghost btn-circle"
      >
        <div className="indicator">
          <IoCartOutline
            size={24}
            className="text-base-100 hover:text-neutral"
          />
          {totalItems > 0 && (
            <span className="badge badge-sm indicator-item text-primary font-bold">
              {totalItems}
            </span>
          )}
          {subtotal > 0 && (
            <span className="badge badge-sm absolute -bottom-5 -left-6 text-primary rounded-full text-xs font-bold px-2 py-1">
              ${subtotal.toFixed(2)}
            </span>
          )}
        </div>
      </button>
      <CartSideMenu isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default CartIcon;
