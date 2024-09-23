// lib/sanity.client.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "9twmhni2",
  dataset: "production",
  apiVersion: "2024-09-22",
  useCdn: true,
});
