import { AccountMenu } from './AccountMenu'
import { AccountPhoto } from './AccountPhoto'
import { Expand } from '../../expand/Expand'
import { AccountToolbarWrapper } from './Styled'

export const AccountToolbar = ({ isPopupOpen }) => {
  return (
    <AccountToolbarWrapper>
      <AccountPhoto />
      <Expand isOpen={isPopupOpen} />
      {isPopupOpen && <AccountMenu />}
    </AccountToolbarWrapper>
  )
}
