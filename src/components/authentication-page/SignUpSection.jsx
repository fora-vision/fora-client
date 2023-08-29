import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { P } from '../typographic'
import { TetriaryButton } from '../buttons'

const SignUpSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
`

export const SignUpSection = () => {
  const { t } = useTranslation();
  return (
    <SignUpSectionWrapper>
      <P transparent={0.5}>{t('pages.auth.noAccount')}</P>
      <TetriaryButton>{t('pages.auth.signUp')}</TetriaryButton>
    </SignUpSectionWrapper>
  )
}
