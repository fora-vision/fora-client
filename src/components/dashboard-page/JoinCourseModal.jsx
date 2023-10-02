import { useEffect, useState } from "react"
import styled from "styled-components"
import { H1, P } from "../typographic"
import { CodeSection } from "../codeSection/CodeSection"
import { PrimaryButton, SecondaryButton } from "../buttons"
import { CoursePreview } from "../coursePreview/CoursePreview"
import { sessionStore } from "../../store/sessionStore"
import { addUserCourse, getCourseInfo } from "../../utils/API/courses/api-courses"
import { useTranslation } from "react-i18next"

const JoinModal = styled.div`
  display: flex;
  width: 314px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: #262423;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(17, 16, 14, 0.75);
`

const ModalButtons = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`

const CoursePreviewButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

export const JoinCourseModal = ({ code, setCode, toggleModal }) => {
  const { t } = useTranslation()
  const sessionCode = sessionStore.getSessionCode()
  const [course, setCourse] = useState(null)
  const [coursePreview, setCoursePreview] = useState(false)
  const [courseError, setCourseError] = useState('')
  const [courseSuccess, setCourseSuccess] = useState('')
  const handleAddCourse = async () => {
    try {
      await addUserCourse(sessionCode, course.id)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  const handleGetCourseByCode = async () => {
    if (course) {
      setCoursePreview(true)
      return;
    }
    if (code.length !== 4) {
      setCourseError(t('errorMessages.code.courseLength'))
      return;
    }
    setCourseError('')
    setCourseSuccess('')
    try {
      const result = await getCourseInfo(sessionCode, code)
      setCourse(result)
      setCourseSuccess(t('course.courseFound'))
    } catch (error) {
      setCourseError(t('errorMessages.code.invalid'))
    }
  }
  useEffect(() => {
    setCourse(null)
    setCourseError('')
    setCourseSuccess('')
  }, [code])
  const handleAnotherCode = () => {
    setCoursePreview(false)
  }
  return (
    <ModalWrapper>
      <JoinModal >
        <H1>{t('pages.dashboard.joinCourse')}</H1>
        {coursePreview
          ?
          <>
            <CoursePreview course={course} />
            <CoursePreviewButtons>
              <PrimaryButton onClick={handleAddCourse}>{t('pages.dashboard.join')}</PrimaryButton>
              <SecondaryButton onClick={handleAnotherCode}>{t('pages.dashboard.enterAnotherCode')}</SecondaryButton>
            </CoursePreviewButtons>
          </>
          :
          <>
            <P transparent={0.75}>{t('pages.dashboard.enterCode')}</P>
            <CodeSection state={code} setState={setCode} nums={4} success={courseSuccess} error={courseError} />
            <ModalButtons>
              <SecondaryButton onClick={toggleModal}>{t('pages.dashboard.cancel')}</SecondaryButton>
              <PrimaryButton onClick={handleGetCourseByCode}>{t('pages.dashboard.continue')}</PrimaryButton>
            </ModalButtons>
          </>}
      </JoinModal>
    </ModalWrapper>
  )
}
