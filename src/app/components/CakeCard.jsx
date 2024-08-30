import React from "react";
import Image from "next/image";

const CakeCard = ({ cake }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image
          scr={cake.imageUrl}
          alt={cake.alt}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cake.name}</h2>
        <p>{cake.description}</p>
      </div>
    </div>
  );
};

export default CakeCard;
