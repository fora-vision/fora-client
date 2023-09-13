import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { P } from '../typographic'
import { TetriaryButton } from '../buttons'
import { useNavigate } from 'react-router-dom';

const LogInSectionnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
`

export const LogInSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const handleLogin = () => { navigate('/authentication') }
  return (
    <LogInSectionnWrapper>
      <P transparent={0.5}>{t('pages.signup.haveAnAccount')}</P>
      <TetriaryButton onClick={handleLogin}>{t('pages.signup.logIn')}</TetriaryButton>
    </LogInSectionnWrapper>
  )
}
