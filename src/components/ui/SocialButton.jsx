import React from "react";
import Link from "next/link";

const SocialButton = ({
  icon: Icon,
  label,
  url,
  bgColor = "bg-base-100",
  textColor = "text-primary",
  hoverBgColor = "hover:bg-neutral",
  hoverTextColor = "hover:text-accent",
  focusBgColor = "focus:bg-neutral",
  focusTextColor = "focus:text-primary",
}) => {
  return (
    <Link
      href={url}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className={`btn btn-circle btn-outline ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${focusBgColor} ${focusTextColor}`}
      >
        <Icon size={24} />
      </button>
    </Link>
  );
};

export default SocialButton;
