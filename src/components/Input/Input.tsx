import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import "./Input.css"

import CardInput from './CardInput/CardInput';

import { IInputBaseProps } from './Input.types';

export default function Input(props: IInputBaseProps) {

  let classNames = ["compatibleui-input"];
  if (props.customClassName) classNames = [props.customClassName];
  if (props.extraClassName) classNames.push(props.extraClassName)

  props = {
    ...props,
    className: classNames.join(' ')
  }

  switch(props.type) {
    case "card": return <CardInput {...props}/>
    case "card/cvc": return <CardInput {...props}/>
    case "card/date": return <CardInput {...props}/>
    case "number": return <input {...props}/>
    case "text": return <input {...props}/>
  }
  

}
