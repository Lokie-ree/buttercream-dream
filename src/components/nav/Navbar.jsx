"use client";

import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
//import { signOut } from "firebase/auth";
//import { auth } from "@/app/lib/firebase/firebase";
//import useAuth from "@/hooks/useAuth";
//import { useRouter } from "next/navigation";

const Navbar = () => {
  //const user = useAuth();
  //const router = useRouter();

  /*
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/auth/signin");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  */

  return (
    <div className="navbar bg-primary text-base-100">
      <div className="navbar-start">
        <Link href="/" passHref={true} className="text-2xl font-bold">
          I Dream of Buttercream
        </Link>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenuOutline className="hover:text-neutral" size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral text-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex lg:gap-5">
        <ul className="menu menu-horizontal px-4 text-3xl text-base-100">
          <li className="hover:text-neutral">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="hover:text-neutral">
            <Link href="/cart">Cart</Link>
          </li>
          <li className="hover:text-neutral">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">End</div>
    </div>
  );
};

export default Navbar;
