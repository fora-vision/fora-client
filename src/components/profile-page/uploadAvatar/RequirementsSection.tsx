import { useTranslation } from 'react-i18next'
import { H1, P } from '../../typographic'
import { TextContent } from './Styled'

export const RequirementsSection = () => {
  const { t } = useTranslation()

  return (
    <TextContent>
      <H1>{t("pages.profile.avatarUpload")}</H1>
      <div>
        <P transparent={0.75}>{t("pages.profile.requirements")}</P>
        <ul>
          <li>{t("pages.profile.brightFace")}</li>
          <li>{t("pages.profile.yourPhoto")}</li>
          <li>{t("pages.profile.maxSize")}</li>
          <li>{t("pages.profile.photoFormat")}</li>
        </ul>
      </div>
    </TextContent>
  )
}
