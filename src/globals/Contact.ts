import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
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
      name: 'email',
      type: 'email',
      label: {
        en: 'Contact email',
        fr: 'Email de contact',
      },
      localized: true,
    },
    {
      name: 'button-label',
      type: 'text',
      label: {
        en: 'Button Label',
        fr: 'Titre du bouton',
      },
      localized: true,
    },
  ],
}