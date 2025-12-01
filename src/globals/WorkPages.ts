import { GlobalConfig } from 'payload'

export const WorkPages: GlobalConfig = {
  slug: 'work-pages',
  label: {
    en: 'Work Pages',
    fr: 'Pages de Travaux',
  },
  fields: [
    {
      name: 'pages',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Title',
            fr: 'Titre',
          },
          localized: true,
        },
        {
          name: 'text',
          type: 'textarea',
          label: {
            en: 'Text',
            fr: 'Texte',
          },
          localized: true,
        },
        {
          name: 'works',
          label: {
            en: 'Works',
            fr: 'Travaux',
          },
          type: 'relationship',
          relationTo: 'works',
        },
      ]
    },
  ],
  admin: {
    group: {
      en: 'Pages',
      fr: 'Pages',
    },
  },
  versions: {
    drafts: true,
  },
}