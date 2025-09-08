import styled from 'styled-components'
import { H2Regular } from '../typographic'
import { Wrapper } from './YourPosition'
import { PureWrapper } from '../wrappers'
import { ReactComponent as Hand } from '../../images/leaderboard/hand.svg'
import { useTranslation } from 'react-i18next'

const LeaderboardText = styled(H2Regular)`
  opacity: 0.75
`

const EmptyUserWrapper = styled(Wrapper)`
  align-items: center;
  justify-content: start;
  align-content: center;
  justify-items: center;
  margin: 12px;
`

const IconWrapper = styled(PureWrapper)`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
`

export const CourseHand = () => {
  const { t } = useTranslation()
  return (
    <EmptyUserWrapper>
      <IconWrapper>
        <Hand />
      </IconWrapper>
      <LeaderboardText>{t('pages.course.leaderboard')}</LeaderboardText>
    </EmptyUserWrapper>
  )
}
