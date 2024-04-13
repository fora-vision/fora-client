import { Stack } from '../course-page/safetyModal/Styled'
import { P } from '../typographic'
import { WorkoutItemWrapper, WorkoutNameWrapper } from './Styled'
import { schedulerTime } from './Time'
import { IScheduleWorkout } from './WorkoutsItems'

export const WorkoutItem = ({ workout, fewWorkouts = false, number = 0, selected = 0 }: { workout: IScheduleWorkout, fewWorkouts?: boolean, number?: number, selected?: number }) => {
  const startingHour = schedulerTime.findIndex(time => time === workout.startTime)
  const itemWidth = fewWorkouts ? 60 : 85

  return (
    <WorkoutItemWrapper top={startingHour} duration={workout.duration} width={itemWidth} number={number} selected={selected}>
      <P font={12}>{workout.startTime} - {workout.endTime}</P>
      <Stack flexDirection='row' alignItems='center'>
        <P font={14} fontWeight={700}>{workout.name}</P>
        <WorkoutNameWrapper>
          <P font={12} fontWeight={350}>{workout.courseName}</P>
        </WorkoutNameWrapper>
      </Stack>
    </WorkoutItemWrapper>
  )
}
