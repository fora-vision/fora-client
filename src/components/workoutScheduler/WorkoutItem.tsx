import { WorkoutType } from '../../hooks/use-workoutsByDate.hook'
import { Stack } from '../course-page/safetyModal/Styled'
import { P } from '../typographic'
import { WorkoutItemWrapper, WorkoutNameWrapper } from './Styled'
import { schedulerTime } from './Time'
import { timestampToHours } from './WorkoutsItems'

export const WorkoutItem = ({ workout, fewWorkouts = false, number = 0, selected = 0 }: { workout: WorkoutType, fewWorkouts?: boolean, number?: number, selected?: number }) => {
  const formattedTime = timestampToHours(workout.timestamp)
  const startingHour = schedulerTime.findIndex(time => time === formattedTime)
  const itemWidth = fewWorkouts ? 60 : 85

  return (
    <WorkoutItemWrapper top={startingHour} duration={1} width={itemWidth} number={number} selected={selected}>
      <P font={12}>{formattedTime}</P>
      <Stack flexDirection='row' alignItems='center'>
        <P font={14} fontWeight={700}>{workout.name}</P>
        <WorkoutNameWrapper>
          <P font={12} fontWeight={350}>{workout.course_name}</P>
        </WorkoutNameWrapper>
      </Stack>
    </WorkoutItemWrapper>
  )
}
