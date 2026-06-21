/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PROJECT_ID?: string
  readonly SANITY_STUDIO_DATASET?: string
  readonly NEXT_PUBLIC_PROJECT_ID?: string
  readonly NEXT_PUBLIC_DATASET?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
