import { styled } from 'styled-components'
import { ReactComponent as ArrowIcon } from '../../../images/arrow-icon.svg'
import { AccountLogout } from './AccountLogout'
import { AccountPhoto } from './AccountPhoto'

const AccountToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ArrowIconImage = styled(ArrowIcon)`
  transform: rotateX(${props => props.$reverse ? '-180deg' : '0'});
  transition: all 0.1s linear;
`

export const AccountToolbar = ({ isPopupOpen }) => {
  return (
    <AccountToolbarWrapper>
      <AccountPhoto />
      <ArrowIconImage $reverse={isPopupOpen} />
      {isPopupOpen && <AccountLogout />}
    </AccountToolbarWrapper>
  )
}
