import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { P } from '../typographic'

const ForgotPasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
`

export const ForgotPasswordSection = () => {
  const { t } = useTranslation();
  const recoverLink = "https://www.google.com";
  return (
    <ForgotPasswordWrapper>
      <P transparent={0.5}>{t('pages.auth.forgotPassword')}</P>
      <a href={recoverLink}>{t('pages.auth.recover')}</a>
    </ForgotPasswordWrapper >
  )
}
