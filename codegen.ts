import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8787/graphql',
  documents: ['graphql/**/*.graphql', 'graphql/**/*.gql'],
  generates: {
    'src/{dir}/{name}': {
      plugins: ['typescript', "'typescript-operations", 'typescript-resolvers'],
    },
  },
}

export default config
