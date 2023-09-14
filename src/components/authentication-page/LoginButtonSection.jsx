import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { PrimaryButton } from '../buttons'

const LoginButtonWrapper = styled.div`
  width: 100%;
  padding: 16px 0;
`

export const LoginButtonSection = ({ callback }) => {
  const { t } = useTranslation();
  return (
    <LoginButtonWrapper>
      <PrimaryButton onClick={callback}>{t('pages.auth.next')}</PrimaryButton>
    </LoginButtonWrapper>
  )
}
