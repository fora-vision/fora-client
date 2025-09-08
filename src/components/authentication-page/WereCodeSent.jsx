import styled from 'styled-components'
import { H1, H2Regular, P } from '../typographic'
import { useTranslation } from 'react-i18next'
import { mainColors } from '../../utils/constants'

const YellowH2 = styled(H2Regular)`
  color: #F6D658;
`

export const Wrapper = styled.div`
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

export const WerePinSentForEmail = ({ email }) => {
  const { t } = useTranslation();
  const yellowColor = mainColors['yellow']

  return (
    <Wrapper>
      <H1 style={{ paddingBottom: '24px' }}>{t('pages.profile.confirmEmailChange')}</H1>
      <P font={16}>{t('pages.auth.weSentPin')}</P>
      <P color={yellowColor} fontWeight={700}>{email}</P>
    </Wrapper>
  )
}