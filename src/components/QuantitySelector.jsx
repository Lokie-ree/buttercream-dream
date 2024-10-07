import React from "react";

const QuantitySelector = () => {
  return (
    <div className="flex justify-center">
      <div className="join">
        <button className="btn btn-accent text-base-100 join-item">-</button>
        <button className="btn join-item">2</button>
        <button className="btn btn-accent text-base-100 join-item">+</button>
      </div>
    </div>
  );
};

export default QuantitySelector;
