import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { PrimaryButton } from '../buttons'

const LoginButtonWrapper = styled.div`
  width: 100%;
  padding: 16px 0;
`

export const LoginButtonSection = () => {
  const { t } = useTranslation();
  return (
    <LoginButtonWrapper>
      <PrimaryButton>{t('pages.auth.login')}</PrimaryButton>
    </LoginButtonWrapper>
  )
}
