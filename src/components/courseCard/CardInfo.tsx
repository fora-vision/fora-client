import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { H1, H2, P, PSmall } from '../typographic'
import { VerticalGrayLine } from '../lines'
import { ReactComponent as LeaderboardIcon } from '../../images/leaderboard-icon.svg'
import { ReactComponent as GroupIcon } from '../../images/group-icon.svg'
import { ICourse } from '../../interfaces/ICourse'
import dayjs from 'dayjs'

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
`

const CourseInfo = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: #252525;
  padding: 12px 16px;  
  display: flex;
  gap: 24px;
`

const CourseMetrics = styled.div`
  padding: 8px 16px;
  display: inline-flex;
  gap: 24px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0.75;
  background: #252525;
`

const MetricBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const TotalLessonsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const CardInfo = ({ course }: { course: ICourse }) => {
  const { t } = useTranslation();
  const totalLessons = course.workouts_count;
  const formattedStartDate = dayjs.unix(course.start_date).format('DD/MM')
  const formattedDeadline = dayjs.unix(course.deadline).format('DD/MM');
  const courseLeaderboard = '-'; // с апи пока что не приходит позиция будет course.ranking 
  return (
    <CardInfoWrapper>
      <CourseInfo>
        <div>
          <PSmall transparent={0.5}>{t('components.courseCard.course')}</PSmall>
          <H2>{course.name}</H2>
        </div>
        <VerticalGrayLine />
        <div>
          <PSmall transparent={0.5}>{formattedStartDate}-{formattedDeadline}</PSmall>
          <TotalLessonsInfo>
            <H1>{totalLessons}</H1>
            <P>{t('components.courseCard.lessons')}</P>
          </TotalLessonsInfo>
        </div>
      </CourseInfo>
      <CourseMetrics>
        <MetricBox>
          <LeaderboardIcon />
          <P>{courseLeaderboard}</P>
        </MetricBox>
        <MetricBox>
          <GroupIcon />
          <P>{course.members}</P>
        </MetricBox>
      </CourseMetrics>
    </CardInfoWrapper>
  )
}
