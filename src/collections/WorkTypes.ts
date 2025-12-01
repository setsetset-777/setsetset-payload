import type { CollectionConfig } from 'payload'

export const WorkTypes: CollectionConfig = {
  slug: 'work-types',
  labels: {
    plural: {
      en: 'Work Types',
      fr: 'Types de Travaux',
    },
    singular: {
      en: 'Work Type',
      fr: 'Type de Travaux',
    }
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Title',
        fr: 'Titre'
      },
      localized: true,
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      label: {
        en: 'Introduction',
        fr: 'Présentation'
      },
      localized: true,
    },
    {
      name: 'Works',
      type: 'join',
      collection: 'works',
      on: 'type',
      orderable: true,
    }
  ],
  admin: {
    useAsTitle: 'title',
  },
}
