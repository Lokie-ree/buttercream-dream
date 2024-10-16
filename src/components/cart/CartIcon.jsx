import React, { useState, useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartSideMenu from "./CartSideMenu";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <button onClick={toggleCart} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <IoCartOutline
            size={24}
            className="text-base-100 hover:text-neutral"
          />
          {totalItems > 0 && (
            <span className="badge badge-sm indicator-item text-accent">
              {totalItems}
            </span>
          )}
        </div>
      </button>
      <CartSideMenu isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default CartIcon;
