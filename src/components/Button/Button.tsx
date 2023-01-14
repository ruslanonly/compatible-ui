import React, {FC, PropsWithChildren} from 'react'

interface IButtonProps extends PropsWithChildren {
  className?: string
}

const Button: FC<IButtonProps> = ({children, ...props}: IButtonProps) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}

export default Button
