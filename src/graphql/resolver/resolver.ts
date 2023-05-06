import { RootResolver } from '@hono/graphql-server'
import { qiitaResolver } from './qiita/qiitaResolver'

export const rootResolver: RootResolver = (ctx) => ({
  ...qiitaResolver,
  ...zenn,
})
