import { notFound } from "next/navigation";
import ShopProductDetailClient from "./ShopProductDetailClient";
import { fetchProductsBySlug } from "@/sanity/lib/sanityClient";

export default async function ShopProductDetail({ params }) {
  const { slug } = await params;
  const product = await fetchProductsBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ShopProductDetailClient product={product} />;
}
