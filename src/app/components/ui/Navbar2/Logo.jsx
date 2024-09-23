import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" passHref={true}>
        <Image
          src="/assets/images/brand_logo_64x64.jpg"
          height={64}
          width={64}
          style={{ objectFit: "contain" }}
          loading="lazy"
          alt="Brand Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
