import Link from "next/link";
import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs text-sm mb-4">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
