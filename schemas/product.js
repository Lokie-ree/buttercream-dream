export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "image", type: "image", title: "Product Image" },
    { name: "description", type: "text", title: "Description" },
    { name: "price", type: "number", title: "Price" },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "size" }] }],
    },
  ],
};
