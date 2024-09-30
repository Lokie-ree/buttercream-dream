import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" passHref={true}>
      <img
        src="../../../assets/brand_logo_32x32.jpg"
        alt="Brand Logo"
        className="h-15 w-auto mask mask-squircle object-contain hover:cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
