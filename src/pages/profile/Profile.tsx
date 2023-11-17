import { H1 } from '../../components/typographic'
import { useTranslation } from 'react-i18next'
import { UserSection } from '../../components/profile-page/userSection/UserSection'
import { userStore } from '../../store/profileStore'
import { EmailSection } from '../../components/profile-page/emailSection/EmailSection'
import { ProfileDataSection } from '../../components/profile-page/profileDataSection/ProfileDataSection'
import { UploadAvatar } from '../../components/profile-page/uploadAvatar/UploadAvatar'
import { useToggle } from '../../hooks/use-toggle.hook'
import { PageWrapper, ProfileSections } from './Styled'

export const Profile = () => {
  const { t } = useTranslation()
  const profile = userStore.getUserProfile()
  const [isAvatarUploading, toggleAvatarUploading] = useToggle()
  return (
    <PageWrapper>
      <H1>{t('pages.profile.myProfile')}</H1>
      <ProfileSections>
        <UserSection profile={profile} toggleAvatarUploading={toggleAvatarUploading} />
        <EmailSection profile={profile} />
        <ProfileDataSection profile={profile} />
        <UploadAvatar isAvatarUploading={isAvatarUploading} toggleAvatarUploading={toggleAvatarUploading} profile={profile} />
      </ProfileSections>
    </PageWrapper>
  )
}
