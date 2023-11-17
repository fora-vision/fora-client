import { useTranslation } from 'react-i18next'
import { ReactComponent as SuccessIcon } from '../../../../../images/success.svg'
import { ReactComponent as WarningIcon } from '../../../../../images/warning.svg'
import { ErrorStatusSection, ErrorText, StatusSection, SuccessText } from './Styled'
import { formatSizeError } from '../../../../../utils/constants'

export const ImageStatusSection = ({ imageError, imageSize }: { imageError: number, imageSize: string }) => {
  const { t } = useTranslation()

  if (imageError) {
    const errorMessage = imageError === formatSizeError ? t("pages.profile.uploadAnother") : t("pages.profile.imageSize", { size: imageSize })
    return <ErrorStatusSection>
      <div>
        <WarningIcon />
      </div>
      <ErrorText>{errorMessage}</ErrorText>
    </ErrorStatusSection>
  }

  return (
    <StatusSection>
      <SuccessIcon />
      <SuccessText>{t('pages.profile.uploaded')}</SuccessText>
    </StatusSection>
  )
}
