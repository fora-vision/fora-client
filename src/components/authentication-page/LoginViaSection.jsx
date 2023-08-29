import { styled } from 'styled-components'
import { P } from '../typographic'
import { LoginViaButton } from '../buttons'

import eljur from '../../images/authentication/eljur.png'
import dnevnik from '../../images/authentication/dnevnik.png'
import gosUslugi from '../../images/authentication/gos-uslugi.png'
import googleLogo from '../../images/authentication/google.png'


const LoginViaSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 8px; 
  flex-wrap: wrap;
  padding-top: 16px
`

export const LoginViaSection = () => {
  const buttonWidth = '205px'
  return (
    <LoginViaSectionWrapper>
      <LoginViaButton width={buttonWidth}>
        <img src={eljur} alt="Eljur" width={94} />
      </LoginViaButton>
      <LoginViaButton width={buttonWidth}>
        <img src={dnevnik} alt="Dnevnik" width={90} />
      </LoginViaButton>
      <LoginViaButton width={buttonWidth}>
        <img src={gosUslugi} alt="Gos uslugi" width={126} />
      </LoginViaButton>
      <LoginViaButton width={buttonWidth}>
        <img src={googleLogo} alt="Google logo" width={24} />
        <P fontWeight={700}>Google</P>
      </LoginViaButton>
    </LoginViaSectionWrapper>
  )
}
