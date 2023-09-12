import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { LabeledInput } from '../authentication-page/LabeledInput'

import { useToggle } from '../../hooks/hookToggle'
import { Checkbox } from '../checkbox/Checkbox'
import { P, YellowA } from '../typographic'

const InputsSectionWrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 16px;
`

const ProcessingPersonalData = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 32px;
`

export const InputEmailSection = ({ state, setState }) => {
  const { t } = useTranslation();
  const [isCheck, toggleCheck] = useToggle()
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.reset.email')} id="email" placeholder={t('pages.reset.emailPlaceholder')} state={state} setState={setState} />
      <ProcessingPersonalData>
        <Checkbox isCheck={isCheck} toggleCheck={toggleCheck} />
        <P>Соглашаюсь с <YellowA href="/">Обработкой персональных данных</YellowA></P>
      </ProcessingPersonalData>
    </InputsSectionWrapper>
  )
}

export const NewPasswordSection = ({ state, setState }) => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.reset.newPassword')} id="password" placeholder={t('pages.reset.password')} description={t('pages.reset.newPasswordDescription')} state={state} setState={setState} />
    </InputsSectionWrapper>
  )
}