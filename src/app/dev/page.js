import VariantSelector from "@/components/ui/VariantSelector";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className=" card-title text-lg md:text-2xl font-bold text-primary">
          Cart Summary
        </h2>
        <p className="text-sm md:text-lg font-semibold text-secondary">
          Subtotal: <span className="font-semibold">$100</span>
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default page;
