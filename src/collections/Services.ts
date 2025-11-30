import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  fields: [
    {
      name: 'title',
      label: {
        en: 'Label',
        fr: 'Titre',
      },
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'Items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Label',
            fr: 'Titre',
          },
          required: true,
          localized: true,
        }
      ]
    }
  ],
}
