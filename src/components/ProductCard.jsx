import React from "react";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ title, description, price, imageSrc, imageAlt }) => {
  return (
    <div className="card card-compact w-92 bg-base-100 shadow-xl rounded-xl group relative overflow-hidden">
      <figure className="rounded-t-xl overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.png"}
          alt={imageAlt || "Product image"}
          width={400}
          height={300}
          className="object-cover w-full h-52"
        />
      </figure>
      {/* Price Overlay */}
      <div className="absolute top-0 left-0 w-full h-8 flex justify-center items-center bg-accent bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-base-100 text-2xl font-bold">
          ${price?.toFixed(2) || "Price unavailable"}
        </p>
      </div>
      <div className="card-body bg-base-100 flex flex-col justify-center rounded-b-xl">
        <h2 className="card-title text-accent">
          {title || "Untitled Product"}
        </h2>
        <p className="text-primary">
          {description || "No description available"}
        </p>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductCard;
