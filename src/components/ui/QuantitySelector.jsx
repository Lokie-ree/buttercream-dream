"use client";

import React from "react";

const QuantitySelector = ({ quantity, onQuantityChange, className = "" }) => {
  console.log("onQuantityChange:", onQuantityChange); // Add this to debug
  const quantities = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <select
      value={quantity}
      onChange={(e) => onQuantityChange(parseInt(e.target.value, 10))}
      className={`select select-accent ${className}`}
    >
      {quantities.map((qty) => (
        <option key={qty} value={qty}>
          {qty}
        </option>
      ))}
    </select>
  );
};

export default QuantitySelector;
