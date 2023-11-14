import { styled } from 'styled-components'
import { CardInfo } from './CardInfo'
import { CardActions } from './CardActions'
import { ICourse } from '../../interfaces/ICourse'
import { getCourseStatus } from '../Statuses'

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
  const totalLessons = course.workouts_count;
  const doneLessons = course.workout_num;
  const courseStatus = getCourseStatus(course.status);
  return (
    <CardWrapper>
      <div>
        {courseStatus}
      </div>
      <CardContainer>
        <CardInfo course={course} />
        <CardActions lessonsDone={doneLessons} lessonsTotal={totalLessons} course={course} />
      </CardContainer>
    </CardWrapper>
  )
}
