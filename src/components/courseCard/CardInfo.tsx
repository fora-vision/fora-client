
import { useTranslation } from 'react-i18next'
import { H1, H2, P, PSmall } from '../typographic'
import { VerticalGrayLine } from '../lines'
import { ReactComponent as LeaderboardIcon } from '../../images/leaderboard-icon.svg'
import { ReactComponent as GroupIcon } from '../../images/group-icon.svg'
import { ICourse } from '../../interfaces/ICourse'
import dayjs from 'dayjs'
import { useLeaderboard } from '../../hooks/use-leaderboard.hook'
import { CardInfoWrapper, CourseInfo, CourseMetrics, MetricBox, TotalLessonsInfo } from './Styled'

export const CardInfo = ({ course }: { course: ICourse }) => {
  const { t } = useTranslation();
  const { myPlace } = useLeaderboard(course)

  const totalLessons = course.workouts_count;
  const formattedStartDate = dayjs.unix(course.start_date).format('DD/MM');
  const formattedDeadline = dayjs.unix(course.deadline).format('DD/MM');

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
          <P>{myPlace}</P>
        </MetricBox>
        <MetricBox>
          <GroupIcon />
          <P>{course.members}</P>
        </MetricBox>
      </CourseMetrics>
    </CardInfoWrapper>
  )
}
