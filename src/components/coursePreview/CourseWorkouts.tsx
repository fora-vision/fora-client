import { useTranslation } from 'react-i18next'
import { IExpandedCourse } from '../../interfaces/ICourse'
import { InfoBlock, TextWithIcon } from './CoursePreview'
import { P, PSmall } from '../typographic'
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right.svg"

export const CourseWorkouts = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  return (
    <InfoBlock>
      <PSmall transparent={0.5}>{t('course.trainingNumber')}</PSmall>
      <TextWithIcon>
        <ArrowRightIcon />
        <P>{course.program.workouts.length}</P>
      </TextWithIcon>
    </InfoBlock>
  )
}
