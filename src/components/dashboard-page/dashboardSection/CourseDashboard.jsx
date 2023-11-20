import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { H2Regular } from "../../typographic"
import { TetriaryButton } from "../../buttons"
import { CourseCalendar } from "../../calendar/CourseCalendar"
import { CourseCard } from "../../courseCard/CourseCard"

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 32px;
  @media(max-width: 1400px) {
    flex-direction: column;
  }
`

export const YourCoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HeaderCourses = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
`

export const CoursesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CoursesDashboard = ({ courses, toggleModal }) => {
  const { t } = useTranslation()
  return (
    <DashboardWrapper>
      <CourseCalendar />
      <YourCoursesWrapper>
        <HeaderCourses>
          <H2Regular>{t('pages.dashboard.yourCourses')}</H2Regular>
          <TetriaryButton onClick={toggleModal}>{t('pages.dashboard.joinCourse')}</TetriaryButton>
        </HeaderCourses>
        <CoursesSection>
          {courses.map(course => {
            return <CourseCard key={course.id} course={course} />
          })}
        </CoursesSection>
      </YourCoursesWrapper>
    </DashboardWrapper>
  )
}
