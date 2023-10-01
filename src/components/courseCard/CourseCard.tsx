import { styled } from 'styled-components'
import { CardInfo } from './CardInfo'
import { CardActions } from './CardActions'
import { ICourse } from '../../interfaces/ICourse'
import { ExpiredStatus, InProgressStatus, SuccessStatus, UnavailableStatus } from '../Statuses'

const StatusSection = styled.div`

`

const CardWrapper = styled.div`
  background-color: rgba(245, 245, 245, 0.04);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CourseCard = ({ course }: { course: ICourse }) => {
  const totalLessons = course.program.workouts.length;
  const doneLessons = 0; // c апи пока что не понятно какие из них выполнены
  return (
    <CardWrapper>
      <StatusSection>
        <InProgressStatus />
      </StatusSection>
      <CardContainer>
        <CardInfo course={course} />
        <CardActions lessonsDone={doneLessons} lessonsTotal={totalLessons} />
      </CardContainer>
    </CardWrapper>
  )
}
