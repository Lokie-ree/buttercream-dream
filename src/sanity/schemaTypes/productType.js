export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "productType",
      title: "Product Type",
      type: "string",
      options: {
        list: [
          { title: "Cake", value: "cake" },
          { title: "Pie", value: "pie" },
          { title: "Cookies", value: "cookies" },
          { title: "Cupcakes", value: "cupcakes" },
          { title: "Brownies", value: "brownies" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "basePrice",
      title: "Base Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "variantName",
              title: "Variant Name",
              type: "string",
              description: 'e.g., "6-inch", "Dozen", "Half Dozen"',
            },
            {
              name: "price",
              title: "Price",
              type: "number",
            },
            {
              name: "servings",
              title: "Servings",
              type: "number",
              description: "Number of servings for this variant",
            },
            {
              name: "inStock",
              title: "In Stock",
              type: "boolean",
              initialValue: true,
            },
          ],
        },
      ],
    },
    {
      name: "allergens",
      title: "Allergens",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Nuts", value: "nuts" },
          { title: "Dairy", value: "dairy" },
          { title: "Eggs", value: "eggs" },
          { title: "Gluten", value: "gluten" },
          { title: "Soy", value: "soy" },
          { title: "Wheat", value: "wheat" },
        ],
      },
    },
  ],
};
