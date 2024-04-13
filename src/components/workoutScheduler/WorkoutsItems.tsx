import { WorkoutsItemsWrapper } from "./Styled"
import { WorkoutItem } from "./WorkoutItem"
import { FewWorkouts } from "./FewWorkouts";

export interface IScheduleWorkout {
  name: string,
  duration: number,
  startTime: string,
  endTime: string,
  courseName: string
}

function groupWorkoutsByStartTime(workouts: IScheduleWorkout[]): Record<string, IScheduleWorkout[]> {
  const groupedWorkouts: Record<string, IScheduleWorkout[]> = {};
  workouts.forEach(workout => {
    if (groupedWorkouts[workout.startTime]) {
      groupedWorkouts[workout.startTime].push(workout);
    } else {
      groupedWorkouts[workout.startTime] = [workout];
    }
  });

  return groupedWorkouts;
}

export const WorkoutsItems = ({ workouts }: { workouts: IScheduleWorkout[] }) => {
  const groupedWorkouts = groupWorkoutsByStartTime(workouts);

  return (
    <WorkoutsItemsWrapper>
      {Object.values(groupedWorkouts).map((workouts, index) => {
        if (workouts.length === 1) {
          return <WorkoutItem key={index} workout={workouts[0]} />
        }
        return <FewWorkouts key={index} workouts={workouts} />
      })}
    </WorkoutsItemsWrapper>
  )
}
