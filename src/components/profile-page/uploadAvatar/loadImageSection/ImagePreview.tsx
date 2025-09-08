import { useTranslation } from 'react-i18next'
import { Container, PreviewText, Wrapper } from './Styled'
import { IProfile } from '../../../../interfaces/api/IProfile'
import { H2Regular } from '../../../typographic'
import { AccountPhotoWrapper } from '../../../header/account-panel/Styled'

interface IImagePreview {
  image: File | null,
  profile: IProfile
}

export const ImagePreview = ({ image, profile }: IImagePreview) => {
  const { t } = useTranslation()
  let tempUrl = image ? URL.createObjectURL(image) : ""

  return image ? (
    <div>
      <Wrapper>
        <Container>
          <AccountPhotoWrapper $expanded={true}>
            <img src={tempUrl} alt="profile-preview" />
          </AccountPhotoWrapper>
          <H2Regular>
            {profile.name}
          </H2Regular>
        </Container>
      </Wrapper>
      <PreviewText>
        {t('pages.profile.preview')}
      </PreviewText>
    </div>
  ) : <></>
}
