import React from "react";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center md:flex-row justify-between bg-primary text-base-100 p-4">
      <aside className="flex flex-col md:flex-row items-center mt-2 md:mt-0 text-center md:text-left">
        <p className="ml-2 md:ml-4 mt-2 md:mt-0">
          © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="flex justify-center items-center gap-4 md:mt-0 md:justify-end">
        <SocialButtons />
      </nav>
    </footer>
  );
};

export default Footer;
