import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center bg-primary text-base-100 p-2">
      <aside className="grid-flow-col items-center mt-2">
        <Image
          className="mask mask-squircle rounded-lg shadow-2xl"
          src="/assets/images/brand_logo_32x32.jpg"
          alt="Business Logo & Contact"
          width={32}
          height={32}
          style={{ objectFit: "contain" }}
        />
        <p>© {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:justify-self-end text-base-100 mb-2">
        <Link href="https://www.facebook.com/BritneyLovely87">
          <FaFacebookSquare size={24} />
        </Link>
        <Link href="https://www.instagram.com/buttercream_genie/?fbclid=IwY2xjawE4z3VleHRuA2FlbQIxMAABHaMqg0Aa6cLJWAL-TsVq5aaO4yjWeaGCzQvdPNAKx4QqLIi0k_Nl5d5u3A_aem_SHQOald2SOmhKsoILeNCFw">
          <FaInstagramSquare size={24} />
        </Link>
        <Link href="https://www.tiktok.com/@britneylovely1987?_t=8pCXGjMEEjm&_r=1">
          <FaTiktok size={24} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
