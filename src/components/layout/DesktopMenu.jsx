import React from "react";
import MenuItems from "./MenuItems";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex md:flex-row">
      {/* Apply inline flexbox styles to force horizontal layout */}
      <ul className="flex gap-8 text-xl">
        <MenuItems />
      </ul>
    </div>
  );
};

export default DesktopMenu;
