import { useTranslation } from 'react-i18next';
import { IExpandedCourse } from '../../interfaces/ICourse'
import { InfoBlock, TextWithIcon } from './CoursePreview';
import { P, PSmall } from '../typographic';
import { ReactComponent as RankIcon } from "../../images/leaderboard-icon.svg"
import { useLeaderboard } from '../../hooks/use-leaderboard.hook';

export const CourseRanking = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  const { myPlace } = useLeaderboard(course)

  return (
    <InfoBlock>
      <PSmall transparent={0.5}>{t('course.yourPosition')}</PSmall>
      <TextWithIcon>
        <RankIcon />
        <P>{myPlace}</P>
      </TextWithIcon>
    </InfoBlock>
  )
}
