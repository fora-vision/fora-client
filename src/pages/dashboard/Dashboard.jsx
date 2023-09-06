import { styled } from 'styled-components'
import { PageContainer } from '../../components/pageContainer'
import { JoinCourseSection } from '../../components/joinCourseSection/JoinCourseSection'
import { CourseCard } from '../../components/courseCard/CourseCard'

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const CoursesSection = styled.div`
  width: 1014px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`

export const Dashboard = () => {
  return (
    <div>
      <PageContainer>
        <DashboardWrapper>
          <JoinCourseSection />
          <CoursesSection>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </CoursesSection>
        </DashboardWrapper>
      </PageContainer>
    </div>
  )
}
