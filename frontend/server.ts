import { logDevReady } from '@remix-run/cloudflare'
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'
import * as build from '@remix-run/dev/server-build'

if (process.env.NODE_ENV === 'development') {
  logDevReady(build)
}

// TODO wrangler.tomlを消すとうまく行く
export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => ({ env: context.env }),
  mode: process.env.NODE_ENV,
})
