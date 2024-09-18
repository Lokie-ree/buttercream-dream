export default {
  name: 'cookies',
  title: 'Cookies',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Cookie Name' },
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
            { name: 'type', type: 'string', title: 'Cookie Type' },
            {
              name: 'size',
              type: 'string',
              title: 'Size',
              options: { list: ['Standard', 'Large'] },
            },
            { name: 'quantity', type: 'number', title: 'Quantity per Pack' },
            {
              name: 'soldBy',
              type: 'string',
              title: 'Sold By',
              options: { list: ['Unit', 'Weight'] },
            },
            { name: 'weight', type: 'number', title: 'Weight (if sold by weight)' },
            { name: 'price', type: 'number', title: 'Price' },
            { name: 'sku', type: 'string', title: 'SKU' },
          ],
        },
      ],
    },
    { name: 'customizable', type: 'boolean', title: 'Customization Available' },
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
