import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="flex space-x-4 mt-4 justify-center">
      <Link
        href="https://www.facebook.com/BritneyLovely87"
        aria-lable="Facebook"
      >
        <FaFacebookSquare
          size={24}
          className="text-base-100 hover:text-neutral focus:outline-none"
        />
      </Link>
      <Link
        href="https://www.instagram.com/buttercream_genie/?fbclid=IwY2xjawE4z3VleHRuA2FlbQIxMAABHaMqg0Aa6cLJWAL-TsVq5aaO4yjWeaGCzQvdPNAKx4QqLIi0k_Nl5d5u3A_aem_SHQOald2SOmhKsoILeNCFw"
        aria-label="Instagram"
      >
        <FaInstagramSquare
          size={24}
          className="text-base-100 hover:text-neutral focus:outline-none"
        />
      </Link>
      <Link href="https://www.tiktok.com/@britneylovely1987?_t=8pCXGjMEEjm&_r=1">
        <FaTiktok
          size={24}
          className="text-base-100 hover:text-neutral focus:outline-none"
        />
      </Link>
    </div>
  );
};

export default SocialButtons;
