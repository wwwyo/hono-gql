import { graphqlServer } from '@hono/graphql-server'
import { Hono } from 'hono'
import { schema, rootResolver } from './graphql/index'
import { getQiitaItems } from './graphql/resolver/qiitaResolver'

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
    new Request('http://127.0.0.1:8787/graphql', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ query: 'query { qiitaItems {id} }' }),
    })
  )
  const body = JSON.stringify(await res.json())
  return c.text(body)
})

app.get('/qiita', async (c) => {
  const res = await getQiitaItems({ userId: 'www_y118', page: 1, perPage: 20 })
  return c.json(res)
})

app.use(
  '/graphql',
  graphqlServer({
    schema,
    rootResolver,
  })
)
export default app
