import type { CollectionConfig } from 'payload'

export const WorkTags: CollectionConfig = {
  slug: 'worktags',
  labels: {
    plural: {
      en: 'Work Tags',
      fr: 'Tags de Travaux',
    },
    singular: {
      en: 'Work Tag',
      fr: 'Tag de Travaux',
    }
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: {
        en: 'Label',
        fr: 'Label'
      },
      localized: true,
      required: true,
    },
    {
      name: 'short',
      type: 'text',
      label: {
        en: 'Short name',
        fr: 'Nom court'
      },
      localized: true,
      required: true,
    },
  ],
  admin: {
    useAsTitle: 'label',
  },
}
