import React from 'react'
import { styled } from 'styled-components'
import { PureInput, PureLabel } from '../inputs'
import { Description } from '../inputDescription/Description'

export const LabeledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

interface ILabeledInput {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  description?: string;
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

export const LabeledInput: React.FC<ILabeledInput> = ({ label, id, placeholder, type, description, state, setState }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }
  return (
    <LabeledInputWrapper>
      <PureLabel htmlFor={id}>{label}</PureLabel>
      <PureInput placeholder={placeholder} id={id} type={type || 'text'} value={state} onChange={handleChange} />
      {description && <Description description={description} />}
    </LabeledInputWrapper>
  )
}