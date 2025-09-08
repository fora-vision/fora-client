import { useTranslation } from "react-i18next"
import { Dayjs } from "dayjs"
import { BoldP } from "../typographic"
import { Schedule } from "./Styled"
import { Time } from "./Time"
import { Workouts } from "./Workouts"
import { useWorkoutsByDate } from "../../hooks/use-workoutsByDate.hook"

export const WorkoutScheduler = ({ date }: { date: Dayjs }) => {
  const { monthWorkouts } = useWorkoutsByDate(date)
  const { t } = useTranslation()

  return (
    <div>
      <BoldP>{t('pages.dashboard.upcomingWorkouts')}</BoldP>
      <Schedule>
        <Time />
        <Workouts monthWorkouts={monthWorkouts} />
      </Schedule>
    </div>
  )
}
