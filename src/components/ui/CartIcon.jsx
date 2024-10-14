import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartIcon = () => {
  return (
    <Link href="/cart">
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <IoCartOutline
            size={24}
            className="text-base-100 hover:text-neutral"
          />
          <span className="badge badge-sm indicator-item text-accent">3</span>
        </div>
      </button>
    </Link>
  );
};

export default CartIcon;
