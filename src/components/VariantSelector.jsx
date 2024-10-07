import React from "react";

const VariantSelector = () => {
  return (
    <select className="select select-accent w-full max-w-xs">
      <option selected disabled>
        Select a variant
      </option>
      <option>5-inch $12</option>
      <option>9-inch $20</option>
      <option>Full Sheet $50</option>
    </select>
  );
};

export default VariantSelector;
