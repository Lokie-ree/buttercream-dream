import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  return (
    <Link
      href="/cart"
      className="relative text-base-100 hover:text-neutral"
      passHref={true}
    >
      <FaShoppingCart size={24} />
      <span className="absolute -top-2 -right-2 bg-secondary text-base-100 px-1">
        3
      </span>
    </Link>
  );
};

export default CartButton;
