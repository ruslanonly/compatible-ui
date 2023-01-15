import { InputHTMLAttributes } from "react"

export type InputType = 
"text" | 
"number" |
"card" |
"card/date" |
"card/cvc"

export interface IInputBaseProps {
  type: InputType,
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void,
  value: string | number | undefined
}