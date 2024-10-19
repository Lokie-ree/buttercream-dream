import React from "react";
import AllergensCard from "../cards/AllergensCard";

const ProductInfo = ({ product }) => {
  return (
    <div className="text-primary w-full">
      <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mb-3 md:mt-4 md:mb-4 lg:p-2">
        {product.name}
      </h1>
      <p className="text-sm md:text-xl lg:text-2xl text-secondary mb-4 md:mb-8">
        {product.description}
      </p>
      {product.allergens && <AllergensCard allergens={product.allergens} />}
    </div>
  );
};

export default ProductInfo;
