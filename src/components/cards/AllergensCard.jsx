import React from "react";

const AllergensCard = ({ allergens }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-accent bg-base-100 mb-2"
    >
      <div className="collapse-title text-sm md:text-xl font-medium">
        Nutritional information and allergens
      </div>
      <div className="collapse-content">
        <div className="flex flex-wrap gap-2">
          {allergens.map((allergen, index) => (
            <span
              key={index}
              value={allergen.options}
              className="badge badge-error text-base-100 text-sm md:text-lg capitalize"
            >
              {allergen}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllergensCard;
