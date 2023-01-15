import { HTMLAttributes, InputHTMLAttributes } from "react"

export type InputType = 
"text" | 
"number" |
"card" |
"card/date" |
"card/cvc"

export interface IInputBaseProps extends HTMLAttributes<HTMLInputElement> {
  type: InputType,
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
  value: string | number | undefined,
  customClassName?: string
  extraClassName?: string
}