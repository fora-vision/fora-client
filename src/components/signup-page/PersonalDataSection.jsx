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
      <P>Соглашаюсь с <YellowA href="https://fora.vision/tos" target='_blank'>Обработкой персональных данных</YellowA> и <YellowA href="https://fora.vision/tos1" target='_blank'>политикой по их обработке</YellowA></P>
    </ProcessingPersonalData>
  )
}
