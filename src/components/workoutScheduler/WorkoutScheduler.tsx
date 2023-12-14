import { useTranslation } from "react-i18next"
import { BoldP } from "../typographic"
import { Schedule } from "./Styled"
import { Time } from "./Time"
import { Workouts } from "./Workouts"

export const WorkoutScheduler = () => {
  const { t } = useTranslation()
  return (
    <div>
      <BoldP>{t('pages.dashboard.upcomingWorkouts')}</BoldP>
      <Schedule>
        <Time />
        <Workouts />
      </Schedule>
    </div>
  )
}
