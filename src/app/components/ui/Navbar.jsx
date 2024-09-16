"use client";

import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { auth } from "@/app/lib/firebase/firebase";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const user = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/auth/signin");
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
              <Link href="/">Home</Link>
            </li>
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
          className="btn btn-ghost text-lg md:text-2xl hover:text-neutral"
        >
          I Dream of Buttercream
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:gap-5">
        <ul className="menu menu-horizontal px-4 text-3xl text-base-100">
          <li>
            <Link href="/">Home</Link>
          </li>
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="User Avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral text-primary rounded-box shadow mt-3 p-2"
            >
              <li>
                <Link href="">Settings</Link>
              </li>
              <li>
                <Link href="">Orders</Link>
              </li>
              <li>
                <button onClick={handleLogout} classname="btn btn-accent">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/auth/signin"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-accent hover:text-accent hover:bg-neutral"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
