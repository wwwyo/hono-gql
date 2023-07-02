import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

export function Header() {
  return (
    <header className="container m-auto px-10 py-3">
      <div className="flex justify-between">
        <Logo />
        <div>
          <Button>Sign in</Button>
        </div>
      </div>
    </header>
  )
}
