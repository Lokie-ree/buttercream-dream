"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { BsCake2 } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <BsCake2 size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cakes">Cakes</Link>
            </li>
            <li>
              <Link href="about/">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <button className="btn btn-ghost text-xl">
            I Dream of Buttercream
          </button>
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <Link href="/contact">
            <Image
              src="/assets/images/logo_64x64.png"
              alt="Business Logo & Contact"
              height={28}
              width={28}
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
