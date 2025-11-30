import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
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
}