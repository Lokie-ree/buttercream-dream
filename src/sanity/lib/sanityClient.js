import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-10-07",
  useCdn: false,
});

export async function fetchAllProducts() {
  return client.fetch(`
    *[_type == "product"]{
      "id": _id,
      name,
      slug,
      productType,
      description,
      "imageUrl": image.asset->url,
      basePrice,
      variants[]{
      variantName,
      price,
      servings,
      inStock
    },
    allergens
    }
  `);
}

export async function fetchProductsBySlug(slug) {
  return client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]{
      "id": _id,
      name,
      slug,
      productType,
      description,
      "imageUrl": image.asset->url,
      basePrice,
      variants[]{
        variantName,
        price,
        servings,
        inStock
      },
      allergens
    }
  `,
    { slug }
  );
}
