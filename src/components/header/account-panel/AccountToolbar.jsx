import { styled } from 'styled-components'
import { AccountPhoto } from './AccountPhoto'
import { ReactComponent as ArrowIcon } from '../../../images/arrow-icon.svg'
import { AccountLogout } from './AccountLogout'

const AccountToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ArrowIconImage = styled(ArrowIcon)`
  transform: rotateX(${props => props.$reverse ? '-180deg' : '0'});
  transition: all 0.1s linear;
`

export const AccountToolbar = ({ userPhotoUrl, isPopupOpen }) => {
  return (
    <AccountToolbarWrapper>
      <AccountPhoto photoUrl={userPhotoUrl} />
      <ArrowIconImage $reverse={isPopupOpen} />
      {isPopupOpen && <AccountLogout />}
    </AccountToolbarWrapper>
  )
}
