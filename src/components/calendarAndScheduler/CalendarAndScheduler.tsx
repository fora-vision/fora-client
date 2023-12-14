import { CourseCalendar } from '../calendar/CourseCalendar'
import { WorkoutScheduler } from '../workoutScheduler/WorkoutScheduler'
import { Wrapper } from './Styled'

export const CalendarAndScheduler = () => {
  return (
    <Wrapper>
      <CourseCalendar />
      <WorkoutScheduler />
    </Wrapper>
  )
}
