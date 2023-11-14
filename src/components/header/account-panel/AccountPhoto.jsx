import { styled } from 'styled-components'
import { userStore } from '../../../store/profileStore'

export const AccountPhotoWrapper = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const EmptyPhoto = styled.div`
  width: 100%;
  height: 100%;
  background-color: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AccountPhoto = () => {
  const user = userStore.getUserProfile();
  const photoUrl = user?.avatar || false;
  const usernameFirstLetter = user?.name[0] || '?'
  return (
    <AccountPhotoWrapper>
      {photoUrl ? <img src={photoUrl} alt="Account" /> : <EmptyPhoto >{usernameFirstLetter}</EmptyPhoto>}
    </AccountPhotoWrapper>
  )
}
