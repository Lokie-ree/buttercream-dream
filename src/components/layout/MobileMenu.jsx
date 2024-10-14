"use client";

import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import MobileMenuModal from "./MobileMenuModal";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden text-base-100">
      {/* Button to Open the Menu */}
      <button
        className="btn btn-ghost"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle Mobile Menu"
        tabIndex="0"
      >
        <IoMenuOutline size={24} />
      </button>
      {/* Modal Menu */}
      <MobileMenuModal isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default MobileMenu;
