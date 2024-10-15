"use client";

import { useState, useContext } from "react";
import { CartContext } from "@/components/context/CartContext";
import Image from "next/image";
import QuantitySelector from "@/components/ui/QuantitySelector";
import VariantSelector from "@/components/ui/VariantSelector";
import AllergensCard from "@/components/cards/AllergensCard";

export default function ShopProductDetailClient({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || null
  );
  const { addItemToCart } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    console.log("Quantity changed to", newQuantity);
    setQuantity(newQuantity);
  };

  const handleVariantChange = (variant) => {
    console.log("Variant changed to:", variant);
    setSelectedVariant(variant);
  };

  const handleAddToCart = () => {
    const variantId = selectedVariant.variantName || "default";

    const itemToAdd = {
      id: `${product.id}-${variantId}`,
      name: product.name,
      price: selectedVariant.price || product.basePrice,
      imageUrl: product.imageUrl,
      variant: selectedVariant,
      quantity,
      productId: product.id,
      variants: product.variants,
    };
    console.log("Item to add:", itemToAdd);
    addItemToCart(itemToAdd);
  };

  return (
    <div className="mx-auto p-4 mt-0 md:p-12 min-h-screen bg-base-100">
      <div className="flex flex-col items-center">
        {/* Product image */}
        <div className="w-full md:w-2/3 mb-4 md:mb-6">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="w-full md:w-1/2 h-auto rounded-box shadow-xl object-cover"
            priority
          />
        </div>

        {/* Product info */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-4xl text-primary font-bold mb-3">
            {product.name}
          </h1>
          <p className="text-sm md:text-lg text-secondary mb-4">
            {product.description}
          </p>
          {/* Conditionally render nutritional info if available */}
          {product.allergens && <AllergensCard allergens={product.allergens} />}

          {/* Variant Selector */}
          {product.variants?.length > 0 && (
            <div className="mb-3">
              <label
                htmlFor="variant"
                className="block mb-2 text-md md:text-lg text-primary font-semibold"
              >
                Size
              </label>
              <VariantSelector
                variants={product.variants}
                selectedVariant={selectedVariant}
                onVariantChange={handleVariantChange}
              />
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-5">
            <label
              htmlFor="quantity"
              className="block mb-2 text-md md:text-lg text-primary font-semibold"
            >
              Quantity
            </label>
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            className="btn btn-accent w-full text-base-100 hover:bg-neutral-focus transition-duration-300 mb-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
