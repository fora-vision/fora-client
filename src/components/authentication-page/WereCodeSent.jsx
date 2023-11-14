import styled from 'styled-components'
import { H2Regular } from '../typographic'
import { useTranslation } from 'react-i18next'

const YellowH2 = styled(H2Regular)`
  color: #F6D658;
`

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 8px;
`

export const WereCodeSent = ({ email }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <H2Regular>{t('pages.auth.weSentCode')}</H2Regular>
      <YellowH2>{email}</YellowH2>
    </Wrapper>
  )
}

export const WerePinSent = ({ email }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <H2Regular>{t('pages.auth.weSentPin')}</H2Regular>
      <YellowH2>{email}</YellowH2>
    </Wrapper>
  )
}