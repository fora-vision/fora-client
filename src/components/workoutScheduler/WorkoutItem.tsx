import { WorkoutItemWrapper } from './Styled'
import { schedulerTime } from './Time'
import { IScheduleWorkout } from './WorkoutsItems'

export const WorkoutItem = ({ workout }: { workout: IScheduleWorkout }) => {
  const startingHour = schedulerTime.findIndex(time => time === workout.startTime)


  return (
    <WorkoutItemWrapper top={startingHour} duration={workout.duration}>
      {startingHour} WorkoutItem {workout.startTime}
    </WorkoutItemWrapper>
  )
}
