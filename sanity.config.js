// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Buttercream Dream",

  projectId: "9twmhni2",
  dataset: "production",
  apiVersion: "2024-09-22",
  useCdn: true,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
