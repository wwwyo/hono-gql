import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'
import * as build from '@remix-run/dev/server-build'

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => context.env,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mode: process.env.NODE_ENV,
})
