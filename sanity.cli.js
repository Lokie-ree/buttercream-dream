// sanity.cli.js
import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "9twmhni2",
    dataset: "production",
    apiVersion: "2024-09-22",
    useCdn: true,
  },
});
