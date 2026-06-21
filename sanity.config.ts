import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId =
  import.meta.env.SANITY_STUDIO_PROJECT_ID ||
  import.meta.env.NEXT_PUBLIC_PROJECT_ID ||
  's7zj1jhg'
const dataset =
  import.meta.env.SANITY_STUDIO_DATASET ||
  import.meta.env.NEXT_PUBLIC_DATASET ||
  'development'

export default defineConfig({
  name: 'default',
  title: 'E-Commerce & Blog Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})