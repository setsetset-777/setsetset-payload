import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  fields: [
    {
      name: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'Items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true
        }
      ]
    }
  ],
}
