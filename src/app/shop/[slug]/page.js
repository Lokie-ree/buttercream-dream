import { notFound } from "next/navigation";
//import { useContext } from "react";
//import { CartContext } from "@/context/CartContext";
import { fetchProductsBySlug } from "@/sanity/lib/sanityClient";
import Image from "next/image";
import VariantSelector from "@/components/VariantSelector";
import QuantitySelector from "@/components/QuantitySelector";
import AllergensCard from "@/components/AllergensCard";

export default async function ShopProductDetail({ params }) {
  const { slug } = params;

  const product = await fetchProductsBySlug(slug);

  //const { addToCart } = useContext(CartContext);

  if (!product) {
    notFound();
  }

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
            className="w-full h-auto rounded-xl shadow-xl object-cover"
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
              <VariantSelector variants={product.variants} />
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
            <QuantitySelector />
          </div>
          {/* Add to cart button */}
          <button
            /* onClick={() => addToCart(product)} */
            className="btn btn-accent w-full text-base-100 hover:bg-neutral-focus transition-duration-300 mb-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
