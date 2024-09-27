import React from "react";
import { items } from "utils/items";

const ProductCard = ({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  isInStock,
}) => {
  return (
    <div className="card card-compact w-92 bg-base-100 shadow-xl rounded-xl group relative overflow-hidden">
      <figure className="rounded-t-xl overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-52"
        />
      </figure>
      {/* Price Overlay */}
      <div className="absolute top-0 left-0 w-full h-8 flex justify-center items-center bg-accent bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-base-100 text-2xl font-bold">
          ${price ? price.toFixed(2) : "Price Not Available"}
        </p>
      </div>
      <div className="card-body bg-base-100 flex flex-col justify-center rounded-b-xl">
        <h2 className="card-title text-accent">{name}</h2>
        <p className="text-primary">{description}</p>
        <p className="text-secondary">
          {isInStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
