import { RootResolver } from '@hono/graphql-server'
import { buildSchema } from 'graphql'

export const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

export const rootResolver: RootResolver = (ctx) => {
  return {
    hello: () => 'Hello Hono!',
  }
}
