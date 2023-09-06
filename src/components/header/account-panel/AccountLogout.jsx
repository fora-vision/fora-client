import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { LogOutButton } from '../../buttons'
import { ReactComponent as LogoutIcon } from '../../../images/logout.svg'

const LogoutPopup = styled.div`
  position: absolute;
  bottom: -45px;
  right: 3px;
  width: 160px;
`

export const AccountLogout = () => {
  const { t } = useTranslation();
  const handleLogout = (event) => { event.stopPropagation() } // add logout logic 
  return (
    <LogoutPopup onClick={handleLogout}>
      <LogOutButton>
        {t('header.logout')}
        <LogoutIcon />
      </LogOutButton>
    </LogoutPopup>
  )
}
