import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as ChangeIcon } from '../../../../../images/change-icon.svg'
import { P } from '../../../../typographic'
import { ImageStatusSection } from './ImageStatusSection'
import { ChangeButton, CustomChangeButton, CustomLabel, ImageData, ImageInput, ImageName, ImageSize, Wrapper } from './Styled'
import { AccountPhotoWrapper } from '../../../../header/account-panel/Styled'

export const PreviewInput = ({ handleImageChange, imageName, imageSize, image, imageError }: { handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void, imageName: string, imageSize: string, image: File, imageError: number }) => {
  const { t } = useTranslation()
  const tempUrl = URL.createObjectURL(image);

  return (
    <div>
      <Wrapper>
        <div>
          <AccountPhotoWrapper>
            <img src={tempUrl} alt="avatar-preview" />
          </AccountPhotoWrapper>
        </div>
        <ImageData>
          <ImageName>
            {imageName}
          </ImageName>
          <ImageSize>{imageSize} {t('pages.profile.mb')}</ImageSize>
        </ImageData>
        <CustomChangeButton>
          <ImageInput accept=".png, .jpeg, .jpg, .tiff" id="upload-avatar" type="file" onChange={handleImageChange} />
          <CustomLabel htmlFor='upload-avatar' >
            <ChangeButton>
              <ChangeIcon />
              <P>{t('pages.profile.change')}</P>
            </ChangeButton>
          </CustomLabel>
        </CustomChangeButton>
      </Wrapper>
      <ImageStatusSection imageError={imageError} imageSize={imageSize} />
    </div>
  )
}
