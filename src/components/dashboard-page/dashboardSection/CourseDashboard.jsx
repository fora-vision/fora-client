import styled from "styled-components"
import { H2Regular } from "../../typographic"
import { PrimaryButton, SecondaryButton, TetriaryButton } from "../../buttons"
import { CourseCalendar } from "../../calendar/CourseCalendar"
import { CourseCard } from "../../courseCard/CourseCard"

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 32px;
`

const YourCoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CoursesJoin = styled.div`
  margin-top: 16px;
  border-radius: 4px;
  border: 1px dashed rgba(245, 245, 245, 0.20);
  background: rgba(245, 245, 245, 0.04);
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderCourses = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
`

const CoursesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CoursesDashboard = ({ courses, toggleModal }) => {
  return (
    <DashboardWrapper>
      <CourseCalendar />
      <YourCoursesWrapper>
        <HeaderCourses>
          <H2Regular>Ваши курсы</H2Regular>
          <TetriaryButton onClick={toggleModal}>Присоединится к курсу</TetriaryButton>
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
