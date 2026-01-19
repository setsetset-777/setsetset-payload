import { GlobalConfig } from 'payload'

export const Contact: GlobalConfig = {
  slug: 'contact',
  label: {
    en: 'Contact',
    fr: 'Contact',
  },
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
        en: 'Introduction',
        fr: 'Introduction',
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
      localized: false,
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
