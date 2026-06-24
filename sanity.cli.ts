import {defineCliConfig} from 'sanity/cli'

declare const process: {
  env: Record<string, string | undefined>
}

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_PROJECT_ID || 's7zj1jhg'
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_DATASET || 'development'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
