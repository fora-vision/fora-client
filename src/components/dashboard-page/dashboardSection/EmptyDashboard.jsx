import styled from "styled-components"
import { H2Regular } from "../../typographic"
import { PrimaryButton } from "../../buttons"
import { ReactComponent as RunningManIllustration } from '../../../images/illustrations/man-running.svg'
import { CourseCalendar } from "../../calendar/CourseCalendar"
import dayjs from "dayjs"

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

const IllustrationSection = styled.div`
  display: flex;
  justify-content: center;
`

export const EmptyDashboard = ({ toggleModal }) => {
  return (
    <DashboardWrapper>
      <CourseCalendar date={dayjs()} handleNextMonth={() => { }} handlePrevMonth={() => { }} />
      <YourCoursesWrapper>
        <H2Regular>Ваши курсы</H2Regular>
        <CoursesJoin>
          <PrimaryButton maxWidth={'434px'} onClick={toggleModal}>Присоединится к курсу </PrimaryButton>
        </CoursesJoin>
        <IllustrationSection>
          <RunningManIllustration />
        </IllustrationSection>
      </YourCoursesWrapper>
    </DashboardWrapper>
  )
}
