// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { en } from '@payloadcms/translations/languages/en'
import { fr } from '@payloadcms/translations/languages/fr'

import { Users } from './collections/Users'
import { WorkTags } from './collections/WorkTags'
import { Works } from './collections/Works'
import { WorkTypes } from './collections/WorkTypes'

import { Home } from './globals/Home'
import { Contact } from './globals/Contact'
import { Services } from './globals/Services'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const localization = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin:
      process.env.NODE_ENV === 'development'
        ? {
            email: process.env.ADMIN_EMAIL,
          }
        : false,
  },
  i18n: {
    supportedLanguages: { en, fr },
    translations: {
      en: {
        general: {
          dashboard: 'Home',
          globals: 'Pages',
        },
      },
    },
  },
  localization,
  collections: [Users, WorkTags, Works, WorkTypes, Media],
  globals: [Home, Services, Contact],
  routes: {
    admin: '/',
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
  endpoints: [
    {
      path: '/locales',
      method: 'get',
      handler: async (req) => {
        return Response.json(localization)
      },
    },
  ],
})
