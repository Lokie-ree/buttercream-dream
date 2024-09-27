import React from "react";
import Link from "next/link";
import CartButton from "../../CartButton";
import SocialButtons from "../../SocialButtons";

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`md:hidden gb-primary ${isOpen ? "block" : "hidden"} transition-all duration-300`}
    >
      <ul className="menu p-4 space-y-4">
        <li>
          <Link
            href="/"
            className="text-base-100 hover:bg-accent hover:text-neutral p-2 rounded-xl"
            passHref={true}
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/shop"
            className="text-base-100 hover:bg-accent hover:text-neutral p-2 rounded-xl"
            passHref={true}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-base-100 hover:bg-accent hover:text-neutral p-2 rounded-xl"
            passHref={true}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-base-100 hover:bg-accent hover:text-neutral p-2 rounded-xl"
            passHref={true}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/signin"
            className="text-base-100 hover:bg-accent hover:text-neutral p-2 rounded-xl"
            passHref={true}
          >
            Sign In
          </Link>
        </li>
        <li>
          <CartButton />
        </li>
        <SocialButtons />
      </ul>
    </div>
  );
};

export default MobileMenu;
