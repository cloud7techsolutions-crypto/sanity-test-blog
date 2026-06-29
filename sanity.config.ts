import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { pantryschemaTypes } from './schemaTypes/sarits-pantry-studio'
import { testWorkspaceSchemaTypes } from './schemaTypes/test-workspace'
import { structureTool, type StructureResolver } from 'sanity/structure'
import DocumentsPane from 'sanity-plugin-documents-pane'

const projectId =
  import.meta.env.SANITY_STUDIO_PROJECT_ID ||
  import.meta.env.NEXT_PUBLIC_PROJECT_ID ||
  's7zj1jhg'
const dataset =
  import.meta.env.SANITY_STUDIO_DATASET ||
  import.meta.env.NEXT_PUBLIC_DATASET ||
  'development'


const sharedStructureWithComments: StructureResolver = (S, context) =>
  S.defaults()?.views([
    S.view.form(), // Default Form View
    S.view
      .component(DocumentsPane)
      .options({
        query: `*[_type == "comment" && target._ref == $id]`,
        params: { id: '_id' },
        options: { perspective: 'previewDrafts' }
      })
      .title('Linked Comments')
  ])

export default defineConfig([
  {
    name: 'test-workspace',
    title: 'E-Commerce & Blog Studio, Test Studio',
    projectId,
    dataset,
    plugins: [deskTool(), visionTool(), structureTool({ structure: sharedStructureWithComments }),
    ],
    basePath: '/test-workspace',
    schema: {
      types: testWorkspaceSchemaTypes,
    },
  },
  {
    name: 'sarits-pantry-studio-Prod',
    title: 'Sarits\'s pantry Studio -- PRODUCTION',
    projectId,
    dataset: 'production',
    basePath: '/sarits-pantry-studio-prod',
    plugins: [deskTool(), visionTool(), structureTool({ structure: sharedStructureWithComments }),
    ],
    schema: { types: pantryschemaTypes },
  },
  {
    name: 'sarits-pantry-studio-Dev',
    title: 'Sarits\'s pantry Studio -- TEST',
    projectId,
    dataset: 'development',
    basePath: '/sarits-pantry-studio-dev',
    plugins: [deskTool(), visionTool(), structureTool({ structure: sharedStructureWithComments }),
    ],
    schema: { types: pantryschemaTypes },
  },
]
)

