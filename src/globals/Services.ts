import { GlobalConfig } from 'payload'

export const Services: GlobalConfig = {
  slug: 'services',
  label: {
    en: 'Services',
    fr: 'Services',
  },
  fields: [
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
      name: 'service',
      label: {
        en: 'Services',
        fr: 'Services',
      },
      type: 'array',
      fields: [
        {
          name: 'title',
          label: {
            en: 'Title',
            fr: 'Titre',
          },
          type: 'text',
        },
        {
          name: 'competences',
          label: {
            en: 'Competences',
            fr: 'Competences',
          },
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