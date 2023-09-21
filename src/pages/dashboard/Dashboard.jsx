import { useState } from 'react'
import { styled } from 'styled-components'
import { PageContainer } from '../../components/pageContainer'
import { useToggle } from '../../hooks/hookToggle'
import { HeaderUser } from '../../components/dashboard-page/statusHeader/HeaderUser'
import { EmptyDashboard } from '../../components/dashboard-page/dashboardSection/EmptyDashboard'
import { JoinCourseModal } from '../../components/dashboard-page/JoinCourseModal'

const StatusHeader = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  margin-bottom: 32px;
`

export const Dashboard = () => {
  const [isJoin, toggleJoin] = useToggle()
  const [courseCode, setCourseCode] = useState('')
  const userPhotoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"; // change to import or src when API ready
  const userName = 'Никита Шевчик' // api data
  const level = 0; // api data
  return (
    <div>
      <PageContainer>
        <StatusHeader>
          <HeaderUser photoUrl={userPhotoUrl} userName={userName} level={level} />
        </StatusHeader>
        <EmptyDashboard toggleModal={toggleJoin} />
      </PageContainer>
      {isJoin && <JoinCourseModal code={courseCode} setCode={setCourseCode} toggleModal={toggleJoin} />}
    </div>
  )
}
