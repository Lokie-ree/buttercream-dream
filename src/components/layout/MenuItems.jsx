import Link from "next/link";
import React from "react";

const MenuItems = ({ closeMenu }) => {
  return (
    <>
      <li
        className="md:text-2xl lg:text-3xl hover:text-neutral"
        onClick={closeMenu}
      >
        <Link href="/shop">Shop</Link>
      </li>
      <li
        className="md:text-2xl lg:text-3xl hover:text-neutral"
        onClick={closeMenu}
      >
        <Link href="/cart">Cart</Link>
      </li>
      <li
        className="md:text-2xl lg:text-3xl hover:text-neutral"
        onClick={closeMenu}
      >
        <Link href="/about">About</Link>
      </li>
    </>
  );
};

export default MenuItems;
