import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { pantryschemaTypes } from './schemaTypes/sarits-pantry-studio'
import { testWorkspaceSchemaTypes } from './schemaTypes/test-workspace'

const projectId =
  import.meta.env.SANITY_STUDIO_PROJECT_ID ||
  import.meta.env.NEXT_PUBLIC_PROJECT_ID ||
  's7zj1jhg'
const dataset =
  import.meta.env.SANITY_STUDIO_DATASET ||
  import.meta.env.NEXT_PUBLIC_DATASET ||
  'development'

export default defineConfig([
  {
  name: 'test-workspace',
  title: 'E-Commerce & Blog Studio, Test Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  basePath: '/test-workspace',
  schema: {
    types: testWorkspaceSchemaTypes,
  },
},
{
    name: 'sarits-pantry-studio',
    title: 'Sarits\'s pantry Studio',
    projectId,
    dataset,
    basePath: '/sarits-pantry-studio',
    plugins: [deskTool(), visionTool()],
    schema: { types: pantryschemaTypes },
  },
])