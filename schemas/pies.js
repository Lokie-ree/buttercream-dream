export default {
  name: 'pie',
  title: 'Pie',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Pie Name' },
    { name: 'description', type: 'text', title: 'Description' },
    {
      name: 'images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      title: 'Images',
    },
    {
      name: 'variants',
      type: 'array',
      title: 'Variants',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'size',
              type: 'string',
              title: 'Size',
              options: {
                list: ['Mini', 'Slice', 'Whole 9-inch', 'Whole 10-inch'],
              },
            },
            { name: 'flavor', type: 'string', title: 'Flavor' },
            {
              name: 'crustType',
              type: 'string',
              title: 'Crust Type',
              options: { list: ['Traditional', 'Gluten-Free', 'Graham Cracker'] },
            },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'sku', type: 'string', title: 'SKU' },
          ],
        },
      ],
    },
    {
      name: 'dietaryInfo',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Dietary Information',
    },
    {
      name: 'allergens',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Allergens',
    },
    // Additional fields...
  ],
}
