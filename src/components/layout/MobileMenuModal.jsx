import React from "react";
import MenuItems from "./MenuItems";
import { IoCloseOutline } from "react-icons/io5";

const MobileMenuModal = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-accent rounded-box bg-opacity-90 text-base-100 flex justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full h-40 max-w-md mx-auto transition-transform duration-300 transform bg-primary shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-6 right-6"
          onClick={toggleMenu}
          aria-label="Close Mobile Menu"
        >
          <IoCloseOutline
            size={32}
            className="text-base-100 hover:text-neutral"
          />
        </button>
        {/* Menu Items */}
        <ul className="flex flex-col space-y-4 p-4 bg-primary text-center text-xl rounded-b-lg">
          <MenuItems closeMenu={toggleMenu} />
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuModal;
