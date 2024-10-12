import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/assets/brand_logo_64x64.jpg"
          alt="Buttercream Brand Logo"
          height={64}
          width={64}
          className="mask mask-squircle shadow-lg"
        />
      </Link>
    </div>
  );
};

export default Logo;
