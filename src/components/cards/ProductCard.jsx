import Link from "next/link";
import React from "react";

const ProductCard = ({ name, description, price, imageSrc, imageAlt }) => {
  return (
    <Link href="#">
      <div className="card card-compact w-full bg-base-100 shadow-xl rounded-xl group relative overflow-hidden transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105">
        <figure className="rounded-t-xl overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-52"
          />
        </figure>
        {/* Price Overlay */}
        <div className="absolute top-0 left-0 w-full h-8 flex justify-center items-center bg-accent bg-opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-base-100 text-xl md:text-2xl lg:text-3xl font-bold">
            ${price ? price.toFixed(2) : "Price Not Available"}
          </p>
        </div>
        <div className="card-body bg-base-100 flex flex-col justify-center rounded-b-xl">
          <h2 className="card-title text-xl text-primary justify-center">
            {name}
          </h2>
          {/* <p className="text-primary">{description}</p> */}
          <button className="btn btn-block bg-accent text-base-100 hover:text-accent hover:bg-neutral">
            View More Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
