import Link from "next/link";
import React from "react";

const AccountButton = ({ isLoggedIn }) => {
  return (
    <Link
      href="#"
      className="btn text-base-100 bg-accent hover:text-accent hover:bg-neutral"
    >
      {isLoggedIn ? "Logout" : "Sign In"}
    </Link>
  );
};

export default AccountButton;
