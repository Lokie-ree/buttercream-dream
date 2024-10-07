import React from "react";
import VariantSelector from "./VariantSelector";
import QuantitySelector from "./QuantitySelector";

const ProductDetailCard = () => {
  return (
    <div className="card bg-base-100 lg:card-side shadow-xl">
      <figure className="rounded-t-xl overflow-hidden">
        <img
          src="/assets/cake.jpg"
          alt="Example Cake"
          className="w-full object-cover h-64"
        />
      </figure>
      <div className="card-body text-primary">
        <h2 className="card-title font-bold text-2xl">Chocolate Delight</h2>
        <p className="font-semibold text-base">
          Rich Chocolate cake topped with chocolate ganache and berries.
        </p>
        <div className="form-control">
          <VariantSelector />
        </div>
        <div className="card-actions flex justify-between">
          <div className="form-control">
            <QuantitySelector />
          </div>
          <button className="btn btn-accent text-base-100 hover:text-accent hover:bg-neutral">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
