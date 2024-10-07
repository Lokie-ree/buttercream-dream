import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDetailCard from "@/components/ProductDetailCard";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full mx-auto p-4">
      <Breadcrumbs />
      <ProductDetailCard />
    </div>
  );
};

export default page;
