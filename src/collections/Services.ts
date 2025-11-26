import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
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
  upload: false, // changed to false since you're not uploading images
}
