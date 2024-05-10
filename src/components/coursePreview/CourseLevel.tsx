import { useTranslation } from 'react-i18next'
import { InfoBlock } from './CoursePreview'
import { PSmall } from '../typographic'

import { IExpandedCourse } from '../../interfaces/ICourse'
import { DifficultLevel } from '../Level/difficult-level'

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
