import React from "react";
import SocialButtonGroup from "../ui/SocialButtonGroup";

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-between md:flex-row bg-primary text-base-100 p-4">
      <aside className="flex flex-col md:flex-row items-center md:mt-0 md:text-left">
        <p className=" md:ml-4 md:mt-0 text-sm md:text-lg lg:text-2xl">
          © {new Date().getFullYear()} | I Dream of Buttercream
        </p>
      </aside>
      <nav className="flex justify-center items-center md:mt-0 md:justify-end">
        <SocialButtonGroup />
      </nav>
    </footer>
  );
};

export default Footer;
