import React from 'react'
import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { PrimaryButton, SecondaryButton } from '../buttons'
import { ReactComponent as RightArrowsIcon } from '../../images/right-icon-black.svg'
import { sessionStore } from '../../store/sessionStore'
import { getRoomUrl } from '../../utils/API/courses/api-courses'
import { ICourse } from '../../interfaces/ICourse'
import { Loader } from '../loader/Loader'
import { useToggle } from '../../hooks/use-toggle.hook'
import { CourseProgress } from './CourseProgress'
import { countTotalProgress } from '../../utils/course-utils'

const CardActionsWrapper = styled.div`
  width: 420px; 
  @media(max-width: 1000px) {
    width: 100%;
  }
`

const OverallProgress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
  @media(max-width: 1000px) {
    gap: 16px;
  }
`

export const CardActions = ({ course }: { course: ICourse }) => {
  const { t } = useTranslation();
  const [isLoadingExercise, toggleLoadingExercise] = useToggle()
  const lessonsProgress = countTotalProgress(course);
  const token = sessionStore.getSessionCode()
  const handleLink = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (token) {
      toggleLoadingExercise()
      try {
        const result = await getRoomUrl(token, course.id, course.workout_num)
        window.open(result.url, '_blank');
      } catch (error) {
        console.log(error)
      }
      toggleLoadingExercise()
    }
  }
  return (
    <CardActionsWrapper>
      <OverallProgress>
        <CourseProgress course={course} />
        {lessonsProgress === 100 ?
          <SecondaryButton disabled>{t('components.courseCard.openCourse')}</SecondaryButton>
          : <PrimaryButton onClick={handleLink} disabled={isLoadingExercise}>
            {isLoadingExercise ? <Loader /> : <>
              {t('components.courseCard.startTraining')}
              <RightArrowsIcon />
            </>}
          </PrimaryButton>
        }
      </OverallProgress>
    </CardActionsWrapper>
  )
}
