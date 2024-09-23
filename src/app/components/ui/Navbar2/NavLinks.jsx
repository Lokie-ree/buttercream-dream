import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-6 items-center">
      <Link
        href="/"
        className="text-2xl text-base-100 hover:text-neutral"
        passHref={true}
      >
        Home
      </Link>
      <Link
        href="/shop"
        className="text-2xl text-base-100 hover:text-neutral"
        passHref={true}
      >
        Shop
      </Link>
      <Link
        href="/contact"
        className="text-2xl text-base-100 hover:text-neutral"
        passHref={true}
      >
        Contact
      </Link>
      <Link
        href="/about"
        className="text-2xl text-base-100 hover:text-neutral"
        passHref={true}
      >
        About
      </Link>
    </div>
  );
};

export default NavLinks;
