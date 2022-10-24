import {codeInput} from '@sanity/code-input'
import {visionTool} from '@sanity/vision'
import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {Logo} from './components/Logo'
import {structure} from './desk/structure'
import {isRecord} from './lib'
import {schema} from './schema'

const BASE_URL = 'http://localhost:3000/api/preview'

export const sanityConfig = createConfig({
  basePath: '/studio',
  title: 'Design',
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID || 'mos42crl',
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET || 'production',
  document: {
    productionUrl: async (prev, ctx) => {
      if (ctx.document._type === 'article') {
        const slug = isRecord(ctx.document.slug) && ctx.document.slug?.current

        if (slug === 'intro') {
          return `${BASE_URL}?slug=/`
        }

        return `${BASE_URL}?slug=/${slug}`
      }

      return prev
    },
  },
  schema,
  studio: {components: {logo: Logo}},
  plugins: [
    codeInput(),
    deskTool({
      structure: structure,
    }),
    visionTool(),
  ],
})
