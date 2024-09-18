export default {
  name: 'cakes',
  title: 'Cakes',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Cake Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' },
    {
      name: 'variants',
      type: 'array',
      title: 'Variants',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'size', type: 'string', title: 'Size (e.g., 8-inch round)' },
            { name: 'shape', type: 'string', title: 'Shape', options: { list: ['Round', 'Square', 'Sheet', 'Bundt', 'Loaf'] } },
            { name: 'tiers', type: 'number', title: 'Number of Tiers', initialValue: 1 },
            { name: 'flavor', type: 'string', title: 'Flavor' },
            { name: 'filling', type: 'string', title: 'Filling' },
            { name: 'frosting', type: 'string', title: 'Frosting' },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'servings', type: 'number', title: 'Servings' },
            { name: 'leadTime', type: 'string', title: 'Lead Time (e.g., 48 hours)' },
            { name: 'sku', type: 'string', title: 'SKU' },
          ],
        },
      ],
    },
    { name: 'customizationOptions', type: 'boolean', title: 'Customization Available' },
    { name: 'dietaryInfo', type: 'array', of: [{ type: 'string' }], title: 'Dietary Information' },
    { name: 'allergens', type: 'array', of: [{ type: 'string' }], title: 'Allergens' },
    // Additional fields...
  ],
}
