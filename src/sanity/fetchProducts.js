import { client } from "library/sanity.client";

export async function fetchProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    price,
    "image": image.asset->url
  }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
