import { IProfile } from "../../../interfaces/api/IProfile"
import { AccountPhoto } from "../../header/account-panel/AccountPhoto"
import { H2Regular, P } from "../../typographic"
import { ReactComponent as LogoutIcon } from '../../../images/profile/logout.svg'
import { EditIconButton } from "../../editIconButton/EditIconButton"
import { useTranslation } from "react-i18next"
import { sessionStore } from "../../../store/sessionStore"
import { userStore } from "../../../store/profileStore"
import { LogoutButton, PhotoWrapper, UserSide, Wrapper } from "./Styled"

interface IUserSection {
  profile: IProfile,
  toggleAvatarUploading: () => void
}

export const UserSection = ({ profile, toggleAvatarUploading }: IUserSection) => {
  const { t } = useTranslation()

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    sessionStore.deleteSessionCode()
    userStore.deleteUserProfile()
    window.location.reload();
  }

  return (
    <Wrapper>
      <UserSide>
        <PhotoWrapper>
          <AccountPhoto expanded />
          <EditIconButton toggleAvatarUploading={toggleAvatarUploading} />
        </PhotoWrapper>
        <div>
          <H2Regular>{profile.name}</H2Regular>
          <P>{profile.email}</P>
        </div>
      </UserSide>
      <LogoutButton onClick={handleLogout}>
        <P>{t('pages.profile.logout')}</P>
        <LogoutIcon />
      </LogoutButton>
    </Wrapper>
  )
}
