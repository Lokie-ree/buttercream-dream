import React from "react";
import { urlFor } from "../../sanity/imageUrlBuilder";
import { fetchProducts } from "../../sanity/fetchProducts";
import ProductCard from "../../components/ProductCard";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main className="min-h-screen bg-base-100 p-8 md:p-12 flex flex-col items-center m-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-accent mb-6 md:mb-10">
        My Delicious Sweets
      </h1>
      <div className="max-w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageSrc={
              product.image ? urlFor(product.image).url() : "/placeholder.png"
            }
            imageAlt={product.title}
          />
        ))}
      </div>
    </main>
  );
}
