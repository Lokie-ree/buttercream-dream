import React from "react";
import ProductCard from "../../components/cards/ProductCard";
import { items } from "utils/items";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-base-100 p-4 md:p-12 flex flex-col items-center m-auto">
      <h1 className="text-2xl font-bold text-accent mb-6 md:mb-10">
        My Delicious Sweets
      </h1>
      <div className="max-w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-5 gap-8">
        {items.map((item) => (
          <ProductCard
            key={item.id || "No Product ID Available"}
            name={item.name || "No Title Available"}
            description={item.description || "No description Available"}
            price={item.price || "No Price Available"}
            imageSrc={item.imageUrl || "Image Not Available"}
            imageAlt={item.name}
            isInStock={item.inStock}
          />
        ))}
      </div>
    </main>
  );
}
