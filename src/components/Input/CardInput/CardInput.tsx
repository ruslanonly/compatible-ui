import React, { useState } from 'react'
import { formatCardDateNumber, formatCardNumber } from '../../utils'

import { IInputBaseProps } from '../Input.types'

export default function CardInput(props: IInputBaseProps) {
  let maxLength = 0;
  switch(props.type) {
    case "card": maxLength = 16; break;
    case "card/date": maxLength = 4; break;
    case "card/cvc": maxLength = 3; break;
  }
  let value = props.value;
  if (props.type == "card")
    value = formatCardNumber(props.value as string)
  else if (props.type == "card/date") value = formatCardDateNumber(props.value as string)

  const _onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const digits = e.currentTarget.value.match(/\d/g) || [];
    e.currentTarget.value = digits.join('').substr(0, maxLength)
    props.onChange && props?.onChange(e);
  }

  return (
    <input 
    {...props}
    value={value}
    onChange={_onChange}/>
  )
}
