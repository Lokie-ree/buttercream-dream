import React from "react";

const VariantSelector = ({ variants }) => {
  return (
    <select className="select select-accent w-auto max-w-xs">
      <option selected disabled>
        Choose one
      </option>
      {variants.map((variant, index) => (
        <option key={index} value={variant.variantName}>
          {variant.variantName} - ${variant.price.toFixed(2)}
        </option>
      ))}
    </select>
  );
};

export default VariantSelector;
