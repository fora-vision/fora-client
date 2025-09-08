import { useTranslation } from 'react-i18next'
import { InfoBlock } from './CoursePreview'
import { PSmall } from '../typographic'
import { DifficultLevel } from '../level/DifficultLevel'
import { IExpandedCourse } from '../../interfaces/ICourse'

export const CourseLevel = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  const courseLevel = course.level;
  return (
    <InfoBlock>
      <PSmall transparent={0.5}>{t('course.difficulty')}</PSmall>
      <DifficultLevel difficultLevel={courseLevel} />
    </InfoBlock>
  )
}
