import { WorkoutsItemsWrapper } from "./Styled"
// import { WorkoutItem } from "./WorkoutItem"

export interface IScheduleWorkout {
  name: string,
  duration: number,
  startTime: string,
  endTime: string,
  courseName: string
}

export const WorkoutsItems = ({ workouts }: { workouts: IScheduleWorkout[] }) => {
  return (
    <WorkoutsItemsWrapper>
      Comming soon...
      {/* {workouts.map(workout => {
        return <WorkoutItem workout={workout}/>
      })} */}
    </WorkoutsItemsWrapper>
  )
}
