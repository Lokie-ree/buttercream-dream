"use client";

import { useState } from "react";
import ProductImage from "@/components/sections/ProductImage";
import ProductInfo from "@/components/sections/ProductInfo";
import AddToCartForm from "@/components/sections/AddToCartForm";

export default function ShopProductDetailClient({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || null
  );

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="w-full min-h-screen max-w-screen-lg bg-base-100 p-6 md:p-14 mx-auto">
      <div className="card 2xl:card-side bg-base-100 gap-6">
        {/* Product Image */}
        <ProductImage imageUrl={product.imageUrl} name={product.name} />
        <div className="flex flex-col w-full">
          {/* Product Info */}
          <ProductInfo product={product} />
          {/* Add to Cart Form */}
          <AddToCartForm
            product={product}
            selectedVariant={selectedVariant}
            onVariantChange={handleVariantChange}
          />
        </div>
      </div>
    </div>
  );
}
