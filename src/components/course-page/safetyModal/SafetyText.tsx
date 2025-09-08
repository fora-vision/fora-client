import { Checkbox } from '../../checkbox/Checkbox'
import { P } from '../../typographic'
import { useTranslation } from 'react-i18next'
import { List, ProcessingPersonalData, TextWrapper } from './Styled'

export const SafetyText = ({ isCheck, toggleCheck }: { isCheck: boolean, toggleCheck: () => void }) => {
  const { t } = useTranslation()
  return (
    <TextWrapper>
      <List>
        <li>{t('safety.eligibility')}</li>
        <li>{t('safety.wellbeing')}</li>
        <li>{t('safety.sobriety')}</li>
        <li>{t('safety.footwear')}</li>
        <li>{t('safety.attire')}</li>
        <li>{t('safety.equipment')}</li>
        <li>{t('safety.accessories')}</li>
        <li>{t('safety.gum')}</li>
        <li>{t('safety.warmup')}</li>
        <li>{t('safety.intensity')}</li>
        <li>{t('safety.recovery')}</li>
        <li>{t('safety.pain')}</li>
      </List>
      <ProcessingPersonalData>
        <Checkbox isCheck={isCheck} toggleCheck={toggleCheck} error='' />
        <P>{t('safety.familiar')}</P>
      </ProcessingPersonalData>
    </TextWrapper>
  )
}
