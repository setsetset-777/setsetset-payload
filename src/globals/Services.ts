import { GlobalConfig } from 'payload'

export const Services: GlobalConfig = {
  slug: 'services-page',
  label: 'Services',
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