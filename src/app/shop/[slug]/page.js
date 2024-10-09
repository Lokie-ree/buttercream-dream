"use client";

import { notFound } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export default function ShopProductDetail({ params }) {
  const { shopId } = params;
  const product = items.find((p) => p.id === parseInt(shopId));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6 md:p-12 min-h-screen bg-base-100">
      <div className="flex flex-col md:flex-row items-center">
        {/* Product image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>
        {/* Product info */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-4xl text-accent font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-base md:text-lg text-primary mb-6">
            {product.description}
          </p>

          {/* Add to cart button */}
          <button
            onClick={() => addToCart(product)}
            className="btn btn-accent w-full text-base-100 hover:bg-neutral-focus px-8 py-3 rounded-full transition-duration-300"
          >
            Add to Cart
          </button>

          {/* Conditionally render nutritional info if available */}
          {product.nutritionalInfo && (
            <div>
              <h3 className="text-xl text-primary font-semibold mb-2">
                Nutritional Information
              </h3>
              <p className="text-base text-primary">
                {product.nutritionalInfo}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
