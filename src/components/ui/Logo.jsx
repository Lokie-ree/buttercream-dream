import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" passHref={true}>
        <img
          src="/assets/images/brand_logo_64x64.jpg"
          alt="Brand Logo"
          className=""
        />
      </Link>
    </div>
  );
};

export default Logo;
