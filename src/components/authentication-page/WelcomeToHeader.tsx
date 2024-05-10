import { useTranslation } from 'react-i18next'
import { styled } from 'styled-components'
import logoPath from '../../images/Fora-logo.png'
import twoSlashes from '../../images/authentication/two-slashes.png'
import { H2, P } from '../typographic'

const WelcomeHeaderWrapper = styled.div`
  display: flex;
  alignItems: start;
  gap: 16px;
  width: 100%;
  padding-bottom: 16px;
`

export const WelcomeToHeader = () => {
  const { t } = useTranslation();
  return (
    <WelcomeHeaderWrapper>
      <img src={logoPath} alt="Fora" width={'36px'} />
      <img src={twoSlashes} alt="two-slashes" width={'16.84px'} height={'46.36px'} />
      <div>
        <H2>{t('pages.auth.welcome')} FORA</H2>
        <P transparent={0.75}>{t('pages.auth.loginOrRegister')}</P>
      </div>
    </WelcomeHeaderWrapper>
  )
}
