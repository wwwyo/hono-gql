import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:8787/graphql',
  documents: ['src/graphql/**/*.{gql,graphql}'],
  generates: {
    'src/graphql/types/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
}
export default config
