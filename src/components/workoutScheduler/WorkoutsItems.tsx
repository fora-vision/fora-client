import { WorkoutsItemsWrapper } from "./Styled"
import { WorkoutItem } from "./WorkoutItem"
import { FewWorkouts } from "./FewWorkouts";
import { WorkoutType } from "../../hooks/use-workoutsByDate.hook";

export interface IScheduleWorkout {
  name: string,
  duration: number,
  startTime: string,
  endTime: string,
  courseName: string
}

export const timestampToHours = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function groupWorkoutsByStartTime(workouts: WorkoutType[]): Record<string, WorkoutType[]> {
  const groupedWorkouts: Record<string, WorkoutType[]> = {};
  workouts.forEach(workout => {
    const formattedTime = timestampToHours(workout.timestamp)

    if (groupedWorkouts[formattedTime]) {
      groupedWorkouts[formattedTime].push(workout);
    } else {
      groupedWorkouts[formattedTime] = [workout];
    }
  });

  return groupedWorkouts;
}

export const WorkoutsItems = ({ workouts }: { workouts: WorkoutType[] }) => {
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
