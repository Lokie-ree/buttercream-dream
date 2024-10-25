import React from "react";
import ProductGridCard from "@/components/cards/ProductGridCard";
import { fetchAllProducts } from "@/sanity/lib/sanityClient";

export default async function ShopPage() {
  let products = [];
  let loading = true;
  try {
    products = await fetchAllProducts();
    loading = false;
  } catch (error) {
    console.error("Error fetching products:", error);
    loading = false;
  }

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <main className="min-h-screen bg-base-100 p-6 md:p-12 flex flex-col items-center mx-auto">
      {products.length > 0 ? (
        <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12 mx-auto">
          {products.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-lg text-red-500">
          No products available at the moment. Please check back later.
        </p>
      )}
    </main>
  );
}
