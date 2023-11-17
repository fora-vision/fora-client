import { useTranslation } from 'react-i18next';
import { IExpandedCourse } from '../../interfaces/ICourse'
import { InfoBlock, TextWithIcon } from './CoursePreview';
import { P, PSmall } from '../typographic';
import { ReactComponent as RankIcon } from "../../images/leaderboard-icon.svg"

export const CourseRanking = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  return (
    <InfoBlock>
      <PSmall transparent={0.5}>{t('course.yourPosition')}</PSmall>
      <TextWithIcon>
        <RankIcon />
        <P>{course.users_count}</P>
      </TextWithIcon>
    </InfoBlock>
  )
}
