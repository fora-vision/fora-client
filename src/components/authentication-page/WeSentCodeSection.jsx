import styled from 'styled-components'
import { P } from '../typographic'
import { SecondaryButton } from '../buttons'
import { WereCodeSent } from './WereCodeSent'
import { useTranslation } from 'react-i18next'
import { useToggle } from '../../hooks/use-toggle.hook'
import { LoginCodeSection } from './LoginCodeSection'

const ColumnSection = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 8px;
`

const Wrapper = styled.div`
  padding-bottom: 16px; 
`

const Description = styled(P)`
  padding: 20px 0;
`

export const WeSentCodeSection = ({ email }) => {
  const { t } = useTranslation();
  const [manualCode, toggleManualCode] = useToggle();
  return manualCode ? <LoginCodeSection email={email} /> : (
    <Wrapper>
      <WereCodeSent email={email} />
      <Description transparent={0.75}>{t('pages.auth.toLoginWriteCode')}</Description>
      <ColumnSection>
        <SecondaryButton onClick={toggleManualCode}>{t('pages.auth.enterCode')}</SecondaryButton>
      </ColumnSection>
    </Wrapper>
  )
}
