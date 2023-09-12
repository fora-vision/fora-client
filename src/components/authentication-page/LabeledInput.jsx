import { styled } from 'styled-components'
import { PureInput, PureLabel } from '../inputs'
import { PSmall } from '../typographic'

const LabeledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Description = styled.div`
  padding-top: 8px;
`

export const LabeledInput = ({ label, id, placeholder, type, description, state, setState }) => {
  const handleChange = (event) => {
    setState(event.target.value)
  }
  return (
    <LabeledInputWrapper>
      <PureLabel htmlFor={id}>{label}</PureLabel>
      <PureInput placeholder={placeholder} id={id} type={type || 'text'} value={state} onChange={handleChange} />
      {description && <Description><PSmall transparent={0.65}>{description}</PSmall></Description>}
    </LabeledInputWrapper>
  )
}