import React from "react";
import { MdMenu, MdClose } from "react-icons/md";

const HamburgerButton = (isOpen) => {
  return (
    <button className="text-base-100 bg-accent md:hidden focus:outline-none hover:text-accent hover:bg-neutral">
      {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
    </button>
  );
};

export default HamburgerButton;
