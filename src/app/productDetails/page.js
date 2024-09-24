import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { urlFor } from "../../sanity/imageUrlBuilder";
import { fetchProducts } from "../../sanity/fetchProducts";
import Image from "next/image";

const ProductDetailPage = ({
  title,
  description,
  imageSrc,
  imageAlt,
  price,
  size,
}) => {
  return (
    <div className="container mx-auto p-6 md:p-12 min-h-screen bg-base-100 flex flex-col items-center">
      <div className="flex flex-col md:flex-row">
        <h1 className="text-2xl text-center md:text-4xl font-bold text-accent mb-6 md:mb-10">
          Product Details
        </h1>
        {/* Product Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <Image
            src={imageSrc || "/placeholder.png"}
            alt={imageAlt || "Product image"}
            width={400}
            height={300}
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
        {/* Product Info */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl text-accent font-bold mb-2">Blueberry Pie</h2>
          <p className="text-xl font-bold text-primary mb-4">Price: $10</p>
          <p className="mb-6">
            A classic blueberry pie with a golden lattice crust and sweet berry
            filling
          </p>
          <p className="mb-6">Nutritional Information</p>
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="btn btn-accent text-base-100 flex-1">
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
