import { graphqlServer } from '@hono/graphql-server'
import { Hono } from 'hono'
import { schema, rootResolver } from './graphql/index'

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
app.get('/test', async (c) => {
  const res = await app.fetch(
    new Request('http://localhost:8787/graphql', {
      method: 'POST',
      body: '{"query":"{ hello }"}',
    })
  )
  const body = JSON.stringify(await res.json())
  return c.text(body)
})

app.use(
  '/graphql',
  graphqlServer({
    schema,
    rootResolver,
  })
)

export default app
