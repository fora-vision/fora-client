import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { PageContainer } from '../../components/pageContainer'
import { useToggle } from '../../hooks/hookToggle'
import { HeaderUser } from '../../components/dashboard-page/statusHeader/HeaderUser'
import { EmptyDashboard } from '../../components/dashboard-page/dashboardSection/EmptyDashboard'
import { JoinCourseModal } from '../../components/dashboard-page/JoinCourseModal'
import { sessionStore } from '../../store/sessionStore'
import { userStore } from '../../store/profileStore'
import { getUserCourses } from '../../utils/API/courses/api-courses'
import { CoursesDashboard } from '../../components/dashboard-page/dashboardSection/CourseDashboard'
import { HeaderStats } from '../../components/dashboard-page/statusHeader/HeaderStats'

const StatusHeader = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  margin-bottom: 32px;
`

export const Dashboard = () => {
  const [courses, setCourses] = useState([])
  const courseLength = courses.length;
  const user = userStore.getUserProfile()
  const [isJoin, toggleJoin] = useToggle();
  const [courseCode, setCourseCode] = useState('');
  const userName = user.name;
  const level = 0; // api data = будет позже 

  useEffect(() => {
    const fetchCourses = async () => {
      const token = sessionStore.getSessionCode()
      const coursesFromApi = await getUserCourses(token)
      setCourses(coursesFromApi)
    }
    fetchCourses()
  }, [])

  return (
    <div>
      <PageContainer>
        <StatusHeader>
          <HeaderUser userName={userName} level={level} courses={courses} />
          {courses && <HeaderStats courses={courses} />}
        </StatusHeader>
        {courseLength > 0 ? <CoursesDashboard courses={courses} toggleModal={toggleJoin} /> : <EmptyDashboard toggleModal={toggleJoin} />}
      </PageContainer>
      {isJoin && <JoinCourseModal code={courseCode} setCode={setCourseCode} toggleModal={toggleJoin} />}
    </div>
  )
}
