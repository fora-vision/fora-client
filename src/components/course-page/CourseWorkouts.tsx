import styled from 'styled-components'
import { IExpandedCourse } from '../../interfaces/ICourse'
import { WorkoutCard } from './workout-card/WorkoutCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 16px;
`

export const CourseWorkouts = ({ course }: { course: IExpandedCourse }) => {
  const workouts = course.program.workouts;
  return (
    <Wrapper>
      {workouts.map((workout, index) => {
        return <WorkoutCard key={index} workout={workout} />
      })}
    </Wrapper>
  )
}
