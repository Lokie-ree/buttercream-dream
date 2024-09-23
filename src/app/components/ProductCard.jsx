import React from "react";

const ProductCard = ({ title, description, price, imageSrc, imageAlt }) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg rounded-xl overflow-hidden">
      <div
        className="w-full h-64 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="invisible w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col p-3">
        <div className="flex flex-col">
          <h2 className="text-xl font-extrabold text-accent">{title}</h2>
          <p className="text-sm text-primary mt-2">{description}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-primary flex-end">
            Starting @ ${price}
          </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
