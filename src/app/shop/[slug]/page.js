import { notFound } from "next/navigation";
//import { useContext } from "react";
//import { CartContext } from "@/context/CartContext";
import { fetchProductsBySlug } from "@/sanity/lib/sanityClient";
import Image from "next/image";
import VariantSelector from "@/components/VariantSelector";
import QuantitySelector from "@/components/QuantitySelector";

export default async function ShopProductDetail({ params }) {
  const { slug } = params;

  const product = await fetchProductsBySlug(slug);

  //const { addToCart } = useContext(CartContext);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6 md:p-12 min-h-screen bg-base-100">
      <div className="flex flex-col md:flex-row items-center">
        {/* Product image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
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
        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-4xl text-primary font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-base md:text-lg mb-6">{product.description}</p>

          {/* Variant Selector */}
          {product.variants?.length > 0 && (
            <div className="mb-6">
              <label
                htmlFor="variant"
                className="block mb-2 text-lg font-semibold"
              >
                Choose a variant
              </label>
              <VariantSelector variants={product.variants} />
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block mb-2 text-lg font-semibold"
            >
              Select a Quantity
            </label>
            <QuantitySelector />
          </div>

          {/* Add to cart button */}
          <button
            /* onClick={() => addToCart(product)} */
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
