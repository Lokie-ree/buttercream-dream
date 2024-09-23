import React from "react";
import cakes from "../lib/cakes";
import CakeCard from "./ProductCard";

const FeaturedCakesCarousel = () => {
  return (
    <section className="p-6 bg-base-200 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Featured Cakes
      </h2>
      <div className="carousel w-full flex space-x-4 overflow-x-scroll">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            id={`item${cake.id}`}
            className="carousel-item w-full md:w-1/2 lg:w-1/3 overflow-hidden"
          >
            <CakeCard cake={cake} />
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-none w-full md:w-1/2 lg:w-1/3">
        {cakes.map((cake) => (
          <a key={cake.id} href={`#item${cake.id}`} className="btn btn-xs">
            {cake.id}
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCakesCarousel;
