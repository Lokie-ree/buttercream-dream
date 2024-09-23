export default {
  name: "size",
  title: "Size",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      options: {
        list: [
          { title: "12 pack", value: "12 pack" },
          { title: "Mini (48 pack)", value: "Mini (48 pack)" },
          { title: "Jumbo (1 pack)", value: "Jumbo (1 pack)" },
          { title: 'Mini (2")', value: 'Mini (2")' },
          { title: 'Whole (5")', value: 'Whole (5")' },
          { title: 'Whole (10")', value: 'Whole (10")' },
          { title: 'Mini (4")', value: 'Mini (4")' },
          { title: 'Round (9")', value: 'Round (9")' },
          { title: 'Round (10")', value: 'Round (10")' },
          { title: 'Square (6")', value: 'Square (6")' },
          { title: 'Square (8")', value: 'Square (8")' },
          { title: 'Square (10")', value: 'Square (10")' },
          { title: "Quarter Sheet", value: "Quarter Sheet" },
          { title: "Half Sheet", value: "Half Sheet" },
          { title: "Full Sheet", value: "Full Sheet" },
        ],
      },
    },
  ],
};
