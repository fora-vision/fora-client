import styled from "styled-components"
import { H1, P } from "../typographic"
import { useTranslation } from "react-i18next"
import { ProgressLine } from "../progress/ProgressLine"
import { ICourse, IExpandedCourse } from "../../interfaces/ICourse"
import { countTotalProgress } from "../../utils/course-utils"

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  align-items: center;
`

const NumericalProgress = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`

export const CourseProgress = ({ course }: { course: ICourse | IExpandedCourse }) => {
  const { t } = useTranslation();
  // const totalLessons = course.workouts_count || '-';
  // const doneLessons = course.workout_num || '-';
  const totalLessons = course.program?.workouts.length || course.workouts_count || 0;
  const doneLessons = course.workout_num || 0;
  const lessonsProgress = countTotalProgress(course) || 0
  return (
    <div>
      <ProgressInfo>
        <NumericalProgress>
          <H1>{lessonsProgress}%</H1>
          <P transparent={0.75}>({doneLessons}/{totalLessons})</P>
        </NumericalProgress>
        <P>{t('components.courseCard.overallProgress')}</P>
      </ProgressInfo>
      <ProgressLine progress={lessonsProgress} />
    </div>
  )
}
