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
    <Label htmlFor={id} size="lg">
      {label}
      <div
        className={cn('-ml-0.5 grid w-full grid-cols-5 items-center space-x-2')}
      >
        <Input
          id={id}
          type="text"
          boxSize="lg"
          placeholder={placeholder}
          className="col-span-4"
        />
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="col-span-1"
        >
          登録
        </Button>
      </div>
    </Label>
  )
}
