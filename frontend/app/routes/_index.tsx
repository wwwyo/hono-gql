import type { ActionFunction, LoaderFunction } from '@remix-run/cloudflare'
import { json, type V2_MetaFunction } from '@remix-run/cloudflare'
import { Form, useLoaderData } from '@remix-run/react'
import { InputWithButton } from '@/feature/blog/components/InputWithButton'
import { Header } from '../components/Header'
import { useEffect, useRef } from 'react'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

export const loader: LoaderFunction = async () => {
  const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (res) => res.json()
  )
  return json(todo)
}

export const action: ActionFunction = async ({ request }) => {
  const body = await request.formData()
  const qiita = body.get('qiita')
  console.log('qiita')
  return json({ qiita })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const form = useRef<HTMLFormElement>(null)
  console.log(json)
  useEffect(() => {
    form.current?.reset()
  }, [data])

  return (
    <>
      <Header />
      <main className="px-10 py-3">
        <div className="container m-auto">
          <h1 className="py-28 text-center text-7xl leading-[88px]">
            Centralize Blog With
            <br />
            <span className="text-accent">BlogQL</span>
          </h1>

          <div className="mx-auto max-w-lg">
            <Form method="post" className="mx-auto" ref={form}>
              <InputWithButton
                id="qiita"
                label="Qiita"
                name="qiita"
                placeholder="qiitaのユーザーID"
                autoFocus
              />
            </Form>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
