import { userStore } from '../../../store/profileStore'
import { AccountPhotoWrapper, EmptyPhoto } from './Styled';

export const AccountPhoto = ({ expanded }: { expanded?: boolean }) => {
  const user = userStore.getUserProfile();
  const photoUrl = user?.avatar || false;
  const usernameFirstLetter = user?.name[0] || '?'
  return (
    <AccountPhotoWrapper $expanded={expanded}>
      {photoUrl ? <img src={photoUrl} alt="Account" /> : <EmptyPhoto >{usernameFirstLetter}</EmptyPhoto>}
    </AccountPhotoWrapper>
  )
}
