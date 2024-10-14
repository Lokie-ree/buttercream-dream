import React from "react";
import MobileMenu from "@/components/layout/MobileMenu";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { IoCartOutline } from "react-icons/io5";

const page = () => {
  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoCartOutline size={24} className="text-base-100" />
              <span className="badge badge-sm indicator-item">5</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-neutral z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg text-secondary font-bold">5 Items</span>
              <span className="text-md text-primary">Subtotal: $199</span>
              <div className="card-actions">
                <Link href="/cart" className="btn btn-accent btn-block">
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu className="text-base-100" />
      </div>
    </>
  );
};

export default page;
