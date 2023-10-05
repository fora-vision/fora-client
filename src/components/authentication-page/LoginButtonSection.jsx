import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { PrimaryButton } from '../buttons'
import { Loader } from '../loader/Loader';

const LoginButtonWrapper = styled.div`
  width: 100%;
  padding: 16px 0;
`

export const LoginButtonSection = ({ callback, isSending }) => {
  const { t } = useTranslation();
  return (
    <LoginButtonWrapper>
      <PrimaryButton onClick={callback} disabled={isSending}>{isSending ? <Loader /> : t('pages.auth.next')}</PrimaryButton>
    </LoginButtonWrapper>
  )
}
