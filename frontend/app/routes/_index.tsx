import type { V2_MetaFunction } from '@remix-run/cloudflare'
import { Logo } from '@/components/ui/Logo'
import { Button } from '../components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Form } from '@remix-run/react'

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

          <div>
            <Form method="post" action="/events">
              <label
                htmlFor="email2"
                className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800 dark:text-gray-100"
              >
                Email
              </label>
              <Input type="text" value={'aaaaa'} />
            </Form>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
