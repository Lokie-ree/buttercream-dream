"use client";

import React, { useContext } from "react";
import MobileMenu from "./MobileMenu";
import Logo from "../ui/Logo";
import DesktopMenu from "./DesktopMenu";
import CartIcon from "../ui/CartIcon";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="navbar bg-primary text-base-100">
      {/* Navbar Start: Left-aligned Logo */}
      <div className="navbar-start flex-shrink-0 w-28 ml-3">
        <Logo />
      </div>

      {/* Navbar Center: Menu for Larger Screens */}
      <div className="navbar-center flex flex-grow items-center justify-center text-center">
        <DesktopMenu />
      </div>

      {/* Navbar End: Cart Icon and Mobile Menu */}
      <div className="navbar-end flex-shrink-0 w-28 flex items-center">
        <CartIcon cartItems={cartItems} />
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
