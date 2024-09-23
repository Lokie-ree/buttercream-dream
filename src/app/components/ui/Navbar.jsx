"use client";

import React, { useState } from "react";
import Logo from "./Navbar2/Logo";
import NavLinks from "./Navbar2/NavLinks";
import CartButton from "./Navbar2/CartButton";
import AccountButton from "./Navbar2/AccountButton";
import SocialButtons from "./SocialButtons";
import HamburgerButton from "./Navbar2/HamburgerButton";
import MobileMenu from "./Navbar2/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="hidden md:flex space-x-6 items-center">
          <AccountButton isLoggedIn={false} />
          <CartButton />
        </div>
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
