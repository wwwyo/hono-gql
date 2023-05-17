import { RootResolver } from '@hono/graphql-server'
import { qiitaResolvers } from './qiita/qiitaResolver'
import { zennResolvers } from './zenn/zennResolver'
import { QueryResolvers } from '@graphql/codegen/resolver'

const resolvers: QueryResolvers = {
  ...qiitaResolvers,
  ...zennResolvers,
}
export const rootResolver: RootResolver = (ctx) => resolvers
