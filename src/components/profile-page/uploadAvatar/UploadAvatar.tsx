import { ModalWrapper } from '../../dashboard-page/JoinCourseModal';
import { PrimaryButton, SecondaryButton } from '../../buttons';
import { IProfile } from '../../../interfaces/api/IProfile';
import { useTranslation } from 'react-i18next';
import { RequirementsSection } from './RequirementsSection';
import { LoadImageSection } from './loadImageSection/LoadImageSection';
import { ButtonSection, ModalContent, UploadModal } from './Styled';
import { useUploadAvatar } from '../../../hooks/use-uploadAvatar.hook';

interface IUploadAvatar {
  isAvatarUploading: boolean,
  toggleAvatarUploading: () => void,
  profile: IProfile
}

export const UploadAvatar = ({ isAvatarUploading, toggleAvatarUploading, profile }: IUploadAvatar) => {
  const { t } = useTranslation()
  const { handleWrapperClick, handleSave, image, setImage, isRequired, setIsRequired } = useUploadAvatar(toggleAvatarUploading)

  return isAvatarUploading ? (
    <ModalWrapper onClick={handleWrapperClick}>
      <UploadModal className="modal">
        <ModalContent>
          <RequirementsSection />
          <LoadImageSection profile={profile} image={image} setImage={setImage} setIsRequired={setIsRequired} />
          <ButtonSection>
            <SecondaryButton onClick={toggleAvatarUploading}>{t("pages.profile.cancel")}</SecondaryButton>
            <PrimaryButton disabled={!isRequired} onClick={handleSave}>{t("pages.profile.save")}</PrimaryButton>
          </ButtonSection>
        </ModalContent>
      </UploadModal>
    </ModalWrapper>
  ) : <></>
};