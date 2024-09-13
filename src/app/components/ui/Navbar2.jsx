"use client";

import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase/firebase";
import useAuth from "@/app/hooks/useAuth";
import ProfileAvatar from "./ProfileAvatar";

const Navbar2 = () => {
  const user = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="navbar bg-primary text-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenuOutline className="hover:text-neutral" size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral text-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/cakes">Cakes</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl md:text-2xl hover:text-neutral"
        >
          I Dream of Buttercream
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 text-3xl text-base-100">
          <li className="hover:text-neutral">
            <Link href="/cakes">Cakes</Link>
          </li>
          <li className="hover:text-neutral">
            <Link href="/cart">Cart</Link>
          </li>
          <li className="hover:text-neutral">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Conditional rendering based on auth status */}
        {user ? (
          <Link href="/">
            <ProfileAvatar />
          </Link>
        ) : (
          <Link href="/auth" className="btn btn-neutral text-primary text-lg">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
