import type { CollectionConfig } from 'payload'

export const Works: CollectionConfig = {
  slug: 'works',
  labels: {
    plural: {
      en: 'Works',
      fr: 'Travaux',
    },
    singular: {
      en: 'Work',
      fr: 'Travail',
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
      required: true,
    },
    {
      name: 'tag',
      type: 'relationship',
      relationTo: 'worktags',
      hasMany: true,
    },
    {
      name: 'type',
      type: 'relationship',
      relationTo: 'work-types',
    },
    {
      name: 'year',
      type: 'text',
      label: {
        en: 'Year',
        fr: 'Année'
      },
    },
    {
      name: 'url',
      label: {
        en: 'Project URL',
        fr: 'URL vers le projet'
      },
      type: 'text',
    },
    {
      name: 'code',
      label: {
        en: 'Code URL',
        fr: 'URL vers le code source',
      },
      type: 'text',
    }
  ],
  admin: {
    useAsTitle: 'title'
  }
}
