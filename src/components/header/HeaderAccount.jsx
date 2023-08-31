import { styled } from 'styled-components'
import { P } from '../typographic'
import { AccountToolbar } from './account-panel/AccountToolbar'
import { useToggle } from '../../hooks/hookToggle'

const AccountMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  cursor: pointer;
`

export const HeaderAccount = () => {
  const [isPopupOpen, togglePopup] = useToggle(false)
  const username = 'Никита Шевчик';
  const userPhotoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"; // change to import or src when API ready
  return (
    <>
      <AccountMenu onClick={togglePopup}>
        <P>{username}</P>
        <AccountToolbar username={username} userPhotoUrl={userPhotoUrl} isPopupOpen={isPopupOpen} />
      </AccountMenu>
    </>
  )
}
