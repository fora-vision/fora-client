import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { LabeledInput } from '../labeledInput/LabeledInput';

const InputsSectionWrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 16px;
`

export const InputEmailSection = ({ state, setState }) => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.reset.email')} id="email" placeholder={t('pages.reset.emailPlaceholder')} state={state} setState={setState} />
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