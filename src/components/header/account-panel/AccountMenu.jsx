import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ReactComponent as EditIcon } from '../../../images/edit.svg'
import { sessionStore } from '../../../store/sessionStore'
import { userStore } from '../../../store/profileStore'
import { ContextItem, ContextMenu } from '../../contextMenu/ContextMenu'
import { P } from '../../typographic'
import { ContextLogoutItem, LogoutWidthIcon, MenuPopup } from './Styled'

export const AccountMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.stopPropagation()
    sessionStore.deleteSessionCode()
    userStore.deleteUserProfile()
    window.location.reload();
  }

  const handleProfile = () => {
    navigate('/profile')
  }

  return (
    <MenuPopup>
      <ContextMenu>
        <ContextItem onClick={handleProfile}>
          <EditIcon />
          <P>{t('header.profile')}</P>
        </ContextItem>
        <ContextLogoutItem onClick={handleLogout}>
          <LogoutWidthIcon />
          <P>{t('header.logout')}</P>
        </ContextLogoutItem>
      </ContextMenu>
    </MenuPopup>
  )
}
