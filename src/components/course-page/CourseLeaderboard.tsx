import styled from 'styled-components'
import { IExpandedCourse } from '../../interfaces/ICourse'
import { LeaderboardItem } from './leaderboard/LeaderboardItem';
import { YourPosition } from './YourPosition';
import { useTranslation } from 'react-i18next';
import { PSmall } from '../typographic';
import { PureWrapper } from '../wrappers';
import { CourseHand } from './CourseHand';
import { useLeaderboard } from "../../hooks/use-leaderboard.hook";
import { TabletSkeleton } from './coursePageSkeleton/CoursePageSkeleton';

const Wrapper = styled(PureWrapper)`
  width: 290.2px;
  padding: 12px;
  @media(max-width: 1200px) {
    width: calc(100% - 24px);
  }
`

const UsersList = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InfoText = styled(PSmall)`
  padding-top: 16px;
  text-align: center;
`

export const CourseLeaderboard = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  const { loading, users, myName, sortedUsers, myUser, totalUsers } = useLeaderboard(course)

  if (loading) {
    return <><TabletSkeleton height={550} width={316.2} /></>
  }

  return (
    <Wrapper>
      <YourPosition user={myUser} />
      <UsersList>
        {sortedUsers.map((user, index) => {
          return <LeaderboardItem key={index} user={user} index={index} totalUsers={totalUsers} myName={myName} />
        })}
      </UsersList>
      {users.length === 0 && <CourseHand />}
      {users.length === 0 && <InfoText transparent={0.75}>{t('pages.course.leaderboardDescription')}</InfoText>}
    </Wrapper >
  )
}


