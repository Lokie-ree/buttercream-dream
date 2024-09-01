import React from "react";

const CakeCard = ({
  imageSrc,
  imageAlt,
  title,
  price,
  description,
  badgeLabel,
}) => {
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
      <div className="p-4">
        <h2 className="text-xl font-bold text-accent mt-4">{title}</h2>
        <p className="text-lg font-semibold text-primary mt-2">${price}</p>
        <p className="text-sm text-primary mt-2">{description}</p>
        {badgeLabel && (
          <span className="badge badge-secondary mt-2">{badgeLabel}</span>
        )}
      </div>
    </div>
  );
};

export default CakeCard;
