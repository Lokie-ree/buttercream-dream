import React from "react";
import AllergensCard from "../cards/AllergensCard";

const ProductInfo = ({ product }) => {
  return (
    <div className="text-primary w-full">
      <h1 className="text-xl md:text-3xl font-bold mt-3 mb-3 md:mt-6 md:mb-4">
        {product.name}
      </h1>
      <p className="text-sm md:text-md lg:text-lg text-secondary mb-4">
        {product.description}
      </p>
      {product.allergens && <AllergensCard allergens={product.allergens} />}
    </div>
  );
};

export default ProductInfo;
