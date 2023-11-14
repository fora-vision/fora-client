import { styled } from 'styled-components'
import { P } from '../typographic'
import { AccountToolbar } from './account-panel/AccountToolbar'
import { useToggle } from '../../hooks/hookToggle'
import { userStore } from '../../store/profileStore'

const AccountMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  cursor: pointer;
`

export const HeaderAccount = () => {
  const user = userStore.getUserProfile()
  const username = user?.name || '?';
  const [isPopupOpen, togglePopup] = useToggle(false)
  return (
    <>
      <AccountMenu onClick={togglePopup}>
        <P>{username}</P>
        <AccountToolbar username={username} isPopupOpen={isPopupOpen} />
      </AccountMenu>
    </>
  )
}
