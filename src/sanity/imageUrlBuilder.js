import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const builder = imageUrlBuilder(createClient);

export function urlFor(source) {
  return builder.image(source);
}
