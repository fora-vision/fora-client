import { useState, useEffect } from "react"
import styled from 'styled-components'
import { IExpandedCourse, ILeaderboardUser } from '../../interfaces/ICourse'
import { LeaderboardItem } from './leaderboard/LeaderboardItem';
import { userStore } from '../../store/profileStore';
import { YourPosition } from './YourPosition';
import { useTranslation } from 'react-i18next';
import { PSmall } from '../typographic';
import { sortByScore } from '../../utils/course-utils';
import { PureWrapper } from '../wrappers';
import { CourseHand } from './CourseHand';
import { getCourseLeaderboard } from '../../utils/API/courses/api-courses';

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
  const [leaderboard, setLeaderboard] = useState<{ users: ILeaderboardUser[] }>({ users: [] })
  const { t } = useTranslation()

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const leaderboard = await getCourseLeaderboard(course.id)
      return leaderboard
    }
    fetchLeaderboard().then(res => {
      setLeaderboard(res)
    }).catch(error => {
      console.log(error)
    })
  }, [course.id])

  const myProfile = userStore.getUserProfile();
  const myName = myProfile.name;
  const users = leaderboard.users;
  const sortedUsers = users.sort(sortByScore);
  const myUser = users.find(user => user.name === myName)
  const totalUsers = users.length;
  return (
    <Wrapper>
      {/* <CourseHand /> */}
      {/* <InfoText transparent={0.75}>{t('pages.course.leaderboardDescription')}</InfoText> */}
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


