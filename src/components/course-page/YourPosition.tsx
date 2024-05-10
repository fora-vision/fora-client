import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { ILeaderboardUser } from '../../interfaces/ICourse'
import { PSmall } from '../typographic'
// import { Trend } from './leaderboard/Trend'
// import { Position } from './leaderboard/Position'
import { UserLevel } from '../Level/userLevel'
// import { CourseHand } from './CourseHand'

export const Wrapper = styled.div`
  padding: 16px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.08);
  background: rgba(245, 245, 245, 0.04);
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px; 
`

const PUpSmall = styled(PSmall)`
  text-transform: uppercase;
`

export const YourPosition = ({ user }: { user?: ILeaderboardUser }) => {
  const { t } = useTranslation()
  return user ? <Wrapper>
    <PUpSmall>{t('pages.course.yourPosition')}</PUpSmall>
    <User>
      {/* <Trend position={user.position} previousPosition={user.previousPosition} /> */}
      {/* <Position position={user.position} /> */}
      <PSmall>{user.name}</PSmall>
      <UserLevel score={user.score} />
    </User>
  </Wrapper> : <></>
}
