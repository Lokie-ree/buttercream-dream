import React from "react";

const VariantSelector = ({ variants, selectedVariant, onVariantChange }) => {
  return (
    <select
      value={selectedVariant.variantName}
      onChange={(e) => {
        const selectedVariantName = e.target.value;
        const variant = variants.find(
          (v) => v.variantName === selectedVariantName
        );
        onVariantChange(variant);
      }}
      className="select select-accent w-full md:text-xl"
    >
      <option disabled>Choose one</option>
      {variants.map((variant) => (
        <option key={variant.variantName} value={variant.variantName}>
          {variant.variantName} - ${variant.price.toFixed(2)}
        </option>
      ))}
    </select>
  );
};

export default VariantSelector;
