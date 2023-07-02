import type { V2_MetaFunction } from '@remix-run/cloudflare'
import { Logo } from '@/components/ui/Logo'
import { Button } from '../components/ui/Button'
import { Form } from '@remix-run/react'
import { InputWithButton } from '../components/blog/InputWithButton'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

export default function Index() {
  return (
    <>
      <header className="container m-auto px-10 py-3">
        <div className="flex justify-between">
          <Logo />
          <div>
            <Button>Sign in</Button>
          </div>
        </div>
      </header>
      <main className="px-10 py-3">
        <div className="container m-auto">
          <h1 className="py-28 text-center text-7xl leading-[88px]">
            Centralize Blog With
            <br />
            <span className="text-accent">BlogQL</span>
          </h1>

          <div className="mx-auto max-w-lg">
            <Form method="post" className="mx-auto" action="/events">
              <InputWithButton
                id="qiita"
                label="Qiita"
                placeholder="qiitaのユーザーID"
              />
            </Form>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
