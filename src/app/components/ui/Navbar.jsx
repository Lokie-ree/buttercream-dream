"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-base-100">
      <div className="flex items-center justify-between w-full">
        {/* Logo on the left */}
        <div className="flex-none">
          <Link href="/">
            <Image
              className="mask mask-squircle rounded-lg shadow-2xl"
              src="/assets/images/brand_logo_32x32.jpg"
              alt="Business Logo & Contact"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
              sizes="(min-width: 768px) 48px, (min-width: 1024px) 64px, 32px"
            />
          </Link>
        </div>

        {/* Text centered on larger screens */}
        <div className="flex-1 text-center hidden md:block">
          <Link
            href="/"
            className="btn btn-ghost text-md md:text-2xl hover:text-neutral focus:outline-none"
          >
            I Dream of Buttercream
          </Link>
        </div>

        {/* Mobile view with centered text */}
        <div className="flex-1 text-center md:hidden">
          <Link href="/" className="btn btn-ghost text-md">
            I Dream of Buttercream
          </Link>
        </div>

        {/* Cart and Menu on the right */}
        <div className="flex-none flex items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:text-neutral focus:outline-none"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item text-primary">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body bg-neutral text-primary rounded-xl">
                <span className="text-lg font-bold">8 Items</span>
                <span className="font-bold">Subtotal: $999</span>
                <div className="card-actions">
                  <Link href="/cart">
                    <button className="btn btn-accent btn-block text-neutral">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square avatar hover:text-neutral focus:outline-none"
            >
              <div className="w-10 rounded-full">
                <div className="rounded-full flex justify-center mt-1">
                  <IoMenuOutline size={30} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-primary font-bold rounded-box z-[1] mt-3 w-22 p-2 shadow"
            >
              <li>
                <Link href="/" className="justify-between">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cart" className="justify-between">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/cakes" className="justify-between">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="/about" className="justify-between">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
