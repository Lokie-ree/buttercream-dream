import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center md:flex-row justify-between bg-primary text-base-100 p-4">
      <aside className="flex flex-col md:flex-row items-center mt-2 md:mt-0 text-center md:text-left">
        <p className="ml-2 md:ml-4 mt-2 md:mt-0">
          © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="flex justify-center gap-4 md:mt-0 md:justify-end">
        <Link
          href="https://www.facebook.com/BritneyLovely87"
          aria-lable="Facebook"
        >
          <FaFacebookSquare
            size={24}
            className="hover:text-secondary focus:outline-none"
          />
        </Link>
        <Link
          href="https://www.instagram.com/buttercream_genie/?fbclid=IwY2xjawE4z3VleHRuA2FlbQIxMAABHaMqg0Aa6cLJWAL-TsVq5aaO4yjWeaGCzQvdPNAKx4QqLIi0k_Nl5d5u3A_aem_SHQOald2SOmhKsoILeNCFw"
          aria-label="Instagram"
        >
          <FaInstagramSquare
            size={24}
            className="hover:text-secondary focus:outline-none"
          />
        </Link>
        <Link href="https://www.tiktok.com/@britneylovely1987?_t=8pCXGjMEEjm&_r=1">
          <FaTiktok
            size={24}
            className="hover:text-secondary focus:outline-none"
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
