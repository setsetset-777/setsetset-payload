import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  label: {
    en: 'Home',
    fr: 'Accueil',
  },
  fields: [
    {
      name: 'catch',
      type: 'textarea',
      label: {
        en: 'Catch phrase',
        fr: 'Accroche',
      },
      localized: true,
    },
  ],
  versions: {
    drafts: true,
  },
  admin: {
    group: {
      en: 'Pages',
      fr: 'Pages',
    },
  },
}