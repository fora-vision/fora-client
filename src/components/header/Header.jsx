import { styled } from 'styled-components'
import foraLogo from '../../images/Fora-logo.png'
import { HeaderAccount } from './HeaderAccount'

const HeaderWrapper = styled.div`
  display: flex;
  height: 96px;
  align-items: center;
`

const HeaderContainer = styled.div`
  display: flex;
  padding: 24px 40px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`

const HeaderLogo = styled.a`
  display: block;
  cursor: pointer;
  width: 35.99px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Header = () => {
  const handleLogoClick = () => { console.log('logo click') };
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo onClick={handleLogoClick}>
          <img src={foraLogo} alt='logo' />
        </HeaderLogo>
        <HeaderAccount />
      </HeaderContainer>
    </HeaderWrapper>
  )
}
