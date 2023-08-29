import { styled } from 'styled-components'
import { PureInput, PureLabel } from '../inputs'

const LabeledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabeledInput = ({ label, id, placeholder }) => {
  return (
    <LabeledInputWrapper>
      <PureLabel htmlFor={id}>{label}</PureLabel>
      <PureInput placeholder={placeholder} id={id} />
    </LabeledInputWrapper>
  )
}