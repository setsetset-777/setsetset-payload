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
  ],
}