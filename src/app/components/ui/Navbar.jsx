"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsCake2 } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar bg-base-100 text-primary">
        <div className="flex-1 flex items-center">
          <a className="btn btn-ghost text-lg">I Dream of Buttercream</a>
        </div>
        {/* Hamburger Menu for small/medium devices */}
        <div class="lg:hidden flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
            <BsCake2 size={30} />
          </button>
        </div>
        {/* Full menu bar for large devices */}
        <div className="hidden lg:flex flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cakes">Cakes</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Dropdown menu for small/medium devices */}
      {isOpen && (
        <div className="lg:hidden bg-base-100">
          <ul className="menu menu-vertical px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cakes">Cakes</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
