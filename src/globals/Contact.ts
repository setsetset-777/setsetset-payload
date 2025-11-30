import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: {
    en: 'Contact',
    fr: 'Contact',
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
      name: 'email',
      type: 'email',
      label: {
        en: 'Contact e-mail',
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
  admin: {
    group: {
      en: 'Pages',
      fr: 'Pages',
    },
  },
}