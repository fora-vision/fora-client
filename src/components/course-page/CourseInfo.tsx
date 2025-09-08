import styled from 'styled-components'
import { IExpandedCourse } from '../../interfaces/ICourse'
import { CourseAndAuthor } from '../coursePreview/CourseAndAuthor'
import { CourseProgress } from '../courseCard/CourseProgress'
import { CourseDuration } from '../coursePreview/CourseDuration'
import { GrayLine } from '../lines'
import { CourseWorkouts } from '../coursePreview/CourseWorkouts'
import { CourseUsers } from '../coursePreview/CourseUsers'
import { CourseRanking } from '../coursePreview/CourseRanking'
import { PureWrapper } from '../wrappers'
import { useTranslation } from 'react-i18next'
import { PrimaryButton } from '../buttons'
import { useToggle } from '../../hooks/use-toggle.hook'
import { ReactComponent as RightArrowsIcon } from '../../images/right-icon-black.svg'
import { SafetyModal } from './safetyModal/SafetyModal'
import { useState } from 'react'
import { sessionStore } from '../../store/sessionStore'
import { Loader } from '../loader/Loader'
import { getRoomUrl } from '../../utils/API/courses/api-courses'

const Wrapper = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media(max-width: 1200px) {
    width: 100%;
  }
`

const SectionWrapper = styled(PureWrapper)`
  padding: 20px 16px;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const ButtonConteiner = styled.div`
  width: 100%;
`

export const CourseInfo = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  const [isSafetyModal, toggleSafetyModal] = useToggle()
  const [isLoadingExercise, toggleLoadingExercise] = useToggle()
  const [courseLink, setCourseLink] = useState('')
  const token = sessionStore.getSessionCode()

  const handleLink = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (token) {
      toggleLoadingExercise()
      try {
        const result = await getRoomUrl(token, course.id, course.workout_num)
        setCourseLink(result.url)
        toggleSafetyModal()
      } catch (error) {
        console.log(error)
      }
      toggleLoadingExercise()
    }
  }

  return (
    <Wrapper>
      <CourseAndAuthor course={course} />
      <SectionWrapper>
        <CourseProgress course={course} />
      </SectionWrapper>
      <SectionWrapper>
        <CourseDuration course={course} />
        <GrayLine />
        <CourseWorkouts course={course} />
        <GrayLine />
        <CourseUsers course={course} />
        <GrayLine />
        <CourseRanking course={course} />
      </SectionWrapper>
      <ButtonWrapper>
        <ButtonConteiner>
          <PrimaryButton disabled={course.status === 0} onClick={handleLink}>
            {isLoadingExercise ? <Loader /> : <>
              {t('components.courseCard.startTraining')}
              <RightArrowsIcon />
            </>}
          </PrimaryButton>
        </ButtonConteiner>
      </ButtonWrapper>
      {isSafetyModal && <SafetyModal link={courseLink} toggleModal={toggleSafetyModal} />}
    </Wrapper>
  )
}
