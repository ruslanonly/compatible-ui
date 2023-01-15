import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import CardInput from './CardInput/CardInput';

import { IInputBaseProps } from './Input.types';

export default function Input(props: IInputBaseProps) {
  switch(props.type) {
    case "card": return <CardInput {...props}/>
    case "card/cvc": return <CardInput {...props}/>
    case "card/date": return <CardInput {...props}/>
    case "number": return <input {...props}/>
    case "text": return <input {...props}/>
  }
  

}
