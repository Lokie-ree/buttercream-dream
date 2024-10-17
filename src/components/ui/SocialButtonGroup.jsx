import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import SocialButton from "./SocialButton";

const SocialButtonGroup = () => {
  const socialLinks = [
    {
      icon: FaFacebook,
      label: "Facebook",
      url: "https://www.facebook.com/BritneyLovely87",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://www.instagram.com/buttercream_genie/?fbclid=IwY2xjawE4z3VleHRuA2FlbQIxMAABHaMqg0Aa6cLJWAL-TsVq5aaO4yjWeaGCzQvdPNAKx4QqLIi0k_Nl5d5u3A_aem_SHQOald2SOmhKsoILeNCFw",
    },
    {
      icon: FaTiktok,
      label: "Tiktok",
      url: "https://www.tiktok.com/@britneylovely1987?_t=8pCXGjMEEjm&_r=1",
    },
  ];

  return (
    <div className="flex justify-center space-x-2">
      {socialLinks.map((link, index) => (
        <SocialButton
          key={index}
          icon={link.icon}
          label={link.label}
          url={link.url}
        />
      ))}
    </div>
  );
};

export default SocialButtonGroup;
