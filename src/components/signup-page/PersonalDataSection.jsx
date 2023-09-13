import React from 'react'
import styled from 'styled-components'
import { Checkbox } from '../checkbox/Checkbox'
import { P, YellowA } from '../typographic'

const ProcessingPersonalData = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`

export const PersonalDataSection = ({ isCheck, toggleCheck }) => {
  return (
    <ProcessingPersonalData>
      <Checkbox isCheck={isCheck} toggleCheck={toggleCheck} />
      <P>Соглашаюсь с <YellowA href="/">Обработкой персональных данных</YellowA></P>
    </ProcessingPersonalData>
  )
}
