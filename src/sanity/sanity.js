import { createClient } from "next-sanity";

export default createClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: "9twmhni2",
  dataset: "production",
  apiVersion: "2024-09-22",
  useCdn: true,
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});
