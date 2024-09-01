import React from "react";
import CakeCard from "../components/CakeCard";
import dummyCakes from "../lib/cakes";

const Cakes = () => {
  return (
    <main className="min-h-screen bg-base-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-accent mb-6">My Cakes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyCakes.map((cake, index) => (
          <CakeCard
            key={index}
            imageSrc={cake.imageSrc}
            imageAlt={cake.imageAlt}
            title={cake.title}
            price={cake.price}
            description={cake.description}
            badgeLabel={cake.badgeLabel}
          />
        ))}
      </div>
    </main>
  );
};

export default Cakes;
