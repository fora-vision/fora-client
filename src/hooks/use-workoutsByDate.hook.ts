import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { getWorkoutsByDate } from '../utils/API/user/api-user';
import { sessionStore } from '../store/sessionStore';

export type WorkoutType = {
  id: number;
  name: string;
  timestamp: number;
  course_name: string;
}

export const useWorkoutsByDate = (date: Dayjs) => {
  const [monthWorkouts, setMonthWorkouts] = useState<WorkoutType[]>([])

  useEffect(() => {
    const handleWorkouts = async () => {
      const token = sessionStore.getSessionCode()
      if (token) {
        const response = await getWorkoutsByDate(date, token);
        return response
      }
    };

    handleWorkouts().then((response: WorkoutType[]) => {
      setMonthWorkouts(response)
    }).catch((error) => {
      console.log(error)
    })
  }, [date])

  return { monthWorkouts }
}
