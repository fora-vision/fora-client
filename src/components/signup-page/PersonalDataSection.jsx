import styled from 'styled-components'
import { Checkbox } from '../checkbox/Checkbox'
import { P, YellowA } from '../typographic'

const ProcessingPersonalData = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`

export const PersonalDataSection = ({ isCheck, toggleCheck, error }) => {
  return (
    <ProcessingPersonalData>
      <Checkbox isCheck={isCheck} toggleCheck={toggleCheck} error={error} />
      <P>Соглашаюсь с <YellowA href="/">Обработкой персональных данных</YellowA></P>
    </ProcessingPersonalData>
  )
}
