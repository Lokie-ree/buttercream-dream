import Link from "next/link";
import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

const HeroCTA = () => {
  return (
    <div className="flex flex-row gap-4">
      <Link
        href="/shop"
        className="btn btn-primary text-base-100 hover:text-primary hover:bg-neutral focus:outline-none"
        aria-label="View Cakes"
      >
        <FaBirthdayCake className="text-xl" />
        Shop
      </Link>
      <Link
        href="/about"
        className="btn btn-outline outline-primary text-primary hover:text-primary hover:bg-neutral focus:outline-none"
        aria-label="Contact Us"
      >
        <IoIosPhonePortrait className="text-xl" />
        Contact
      </Link>
    </div>
  );
};

export default HeroCTA;
