import { useTranslation } from "react-i18next";
import { ICourse } from "../../../interfaces/ICourse";
import { countAverageCourseDone } from "../../../utils/dashboard-utils";
import { H1, PSmall } from "../../typographic";
import { HeaderStatsWrapper } from "./Styled";

export const HeaderStats = ({ courses }: { courses: ICourse[] }) => {
  const { t } = useTranslation();
  const completedWorkouts = courses.reduce(
    (total, obj) => total + obj.workout_num,
    0
  );
  const completedExercises = courses.reduce(
    (total, obj) => total + obj.exercises_complete,
    0
  );
  const averageCourseComplete = countAverageCourseDone(courses);

  return (
    <HeaderStatsWrapper>
      <div>
        <H1>{completedWorkouts}</H1>
        <PSmall transparent={0.75}>
          {t("pages.dashboard.workoutsCompleted")}
        </PSmall>
      </div>
      <div>
        <H1>{completedExercises}</H1>
        <PSmall transparent={0.75}>
          {t("pages.dashboard.exercisesCompleted")}
        </PSmall>
      </div>
      <div>
        <H1>{isNaN(averageCourseComplete) ? 0 : averageCourseComplete}%</H1>
        <PSmall transparent={0.75}>
          {t("pages.dashboard.averageCourseComplete")}
        </PSmall>
      </div>
    </HeaderStatsWrapper>
  );
};
