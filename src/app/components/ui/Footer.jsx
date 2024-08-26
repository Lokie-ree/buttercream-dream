import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center bg-neutral text-neutral-content p-3">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:justify-self-end">
        <Link href="https://www.facebook.com/BritneyLovely87">
          <FaFacebookSquare size={24} />
        </Link>
        <Link href="https://www.instagram.com/buttercream_genie/?fbclid=IwY2xjawE4z3VleHRuA2FlbQIxMAABHaMqg0Aa6cLJWAL-TsVq5aaO4yjWeaGCzQvdPNAKx4QqLIi0k_Nl5d5u3A_aem_SHQOald2SOmhKsoILeNCFw">
          <FaInstagramSquare size={24} />
        </Link>
        <Link href="">
          <FaTiktok size={24} />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
