"use client";

import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const quantities = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="flex">
      <div className="join flex">
        <select
          value={quantity}
          onChange={handleQuantityChange}
          className="select select-accent w-auto"
        >
          {quantities.map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QuantitySelector;
