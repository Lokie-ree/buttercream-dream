import { createClient } from "next-sanity";

const client = createClient({
  projectId: "9twmhni2",
  dataset: "production",
});
export const fetchProducts = async () => {
  const query = `*[_type == "product"] {
  title,
  description,
  price,
  "imageUrl": image.asset->url,
  sizes[]->{
  title
  }
}`;

  return await client.fetch(query);
};
