import { useTranslation } from 'react-i18next'
import { styled } from 'styled-components'
import { LabeledInput } from '../labeledInput/LabeledInput';

const InputsSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
`

export const InputsSection = () => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.auth.email')} id="email" placeholder={t('pages.auth.emailPlaceholder')} />
      <LabeledInput label={t('pages.auth.password')} id="password" placeholder={t('pages.auth.passwordPlaceholder')} />
    </InputsSectionWrapper>
  )
}
