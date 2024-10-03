"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import flamelinkApp from "utils/flamelinkConfig"; // Ensure you're importing the Flamelink configuration

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await flamelinkApp.content.get({
          schemaKey: "products", // Ensure this matches the Flamelink schema key
          populate: true, // Automatically fetch related content (e.g., images)
        });

        console.log("Fetched Products:", productsData); // Log the fetched products for debugging

        if (productsData) {
          setProducts(Object.values(productsData)); // Set the state with fetched products
        } else {
          console.warn("No products found in Flamelink.");
        }
      } catch (error) {
        console.error("Error fetching products from Flamelink:", error);
        setError("Failed to load products.");
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              {/* Handle image from Flamelink's populated content */}
              {product.image && product.image.length > 0 ? (
                <img
                  src={product.image[0].url} // Flamelink should populate the image URL
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 mb-4">No Image</div>
              )}
              <h2 className="text-xl font-semibold">{product.title}</h2>
              {/* Display first variant price */}
              {product.variants && product.variants.length > 0 ? (
                <p className="text-gray-600">${product.variants[0].price}</p>
              ) : (
                <p className="text-gray-600">Price not available</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
