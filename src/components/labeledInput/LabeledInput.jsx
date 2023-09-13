import { styled } from 'styled-components'
import { PureInput, PureLabel } from '../inputs'
import { Description } from '../inputDescription/Description'

const LabeledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabeledInput = ({ label, id, placeholder, type, description, state, setState }) => {
  const handleChange = (event) => {
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