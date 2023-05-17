import { graphqlServer } from '@hono/graphql-server'
import { Hono } from 'hono'
import { schema } from './graphql/schema/schema'
import { rootResolver } from './graphql/resolver/resolver'

export interface Env {
  // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
  // MY_KV_NAMESPACE: KVNamespace;
  //
  // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
  // MY_DURABLE_OBJECT: DurableObjectNamespace;
  //
  // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
  // MY_BUCKET: R2Bucket;
  //
  // Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
  // MY_SERVICE: Fetcher;
}

const app = new Hono()
app.get('/', (c) => c.json({ ok: true, message: 'Hello Cloudflare Workers!' }))

app.use(
  '/graphql',
  graphqlServer({
    schema,
    rootResolver,
  })
)
export default app
