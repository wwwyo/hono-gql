import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { cn } from '@/lib/utils'

type Props = {
  id: string
  label: string
  placeholder?: string
}

export function InputWithButton({ id, label, placeholder }: Props) {
  return (
    <Label htmlFor={id}>
      {label}
      <div className={cn('flex w-full max-w-sm items-center space-x-2')}>
        <Input id={id} type="text" placeholder={placeholder} />
        <Button type="submit">登録</Button>
      </div>
    </Label>
  )
}
