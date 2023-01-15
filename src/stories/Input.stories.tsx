import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import Input from "../components/Input/Input"

export default {
  title: "Input",
  component: Input
} as ComponentMeta<typeof Input>

export const Card: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState<string>();
  console.log(value);
  return <Input type="card" value={value} onChange={(e) => setValue(e.currentTarget.value)}/> 
}

export const CVC: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState<string>();
  console.log(value);
  return <Input type="card/cvc" value={value} onChange={(e) => setValue(e.currentTarget.value)}/> 
}

export const Date: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState<string>();
  console.log(value);
  return <Input type="card/date" value={value} onChange={(e) => setValue(e.currentTarget.value)}/> 
}