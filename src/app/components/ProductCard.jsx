import React from "react";
import Image from "next/image";

const ProductCard = ({ title, description, price, imageSrc, imageAlt }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={imageSrc || "/placeholder.png"}
          alt={imageAlt || "Product image"}
          width={400}
          height={300}
          className="object-cover w-full h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title || "Untitled Product"}</h2>
        <p>{description || "No description available"}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            ${price?.toFixed(2) || "Price unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
