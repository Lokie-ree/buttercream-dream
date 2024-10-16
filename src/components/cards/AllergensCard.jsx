import React from "react";

const AllergensCard = ({ allergens }) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-plus border border-accent bg-neutral mb-3"
    >
      <div className="collapse-title text-sm md:text-md text-primary font-medium">
        Nutritional information and allergens
      </div>
      <div className="collapse-content">
        <ol className="list-disc list-inside text-gray-700 ml-4">
          {allergens.map((allergen, index) => (
            <li key={index} value={allergen.options}>
              {allergen}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AllergensCard;
