import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { ICourse } from "../../../interfaces/ICourse"
import { countAverageCourseDone } from "../../../utils/dashboard-utils"
import { H1, PSmall } from "../../typographic"

const Wrapper = styled.div`
    display: flex;
    gap: 32px;
`

export const HeaderStats = ({ courses }: { courses: ICourse[] }) => {
    const { t } = useTranslation();
    const completedWorkouts = courses.reduce((total, obj) => total + obj.workout_num, 0);
    const completedExercises = courses.reduce((total, obj) => total + obj.exercises_complete, 0);
    const averageCourseComplete = countAverageCourseDone(courses)
    return (
        <Wrapper>
            <div>
                <H1>{completedWorkouts}</H1>
                <PSmall transparent={0.75}>{t('pages.dashboard.workoutsCompleted')}</PSmall>
            </div>
            <div>
                <H1>{completedExercises}</H1>
                <PSmall transparent={0.75}>{t('pages.dashboard.exercisesCompleted')}</PSmall>
            </div>
            <div>
                <H1>{averageCourseComplete}%</H1>
                <PSmall transparent={0.75}>{t('pages.dashboard.averageCourseComplete')}</PSmall>
            </div>
        </Wrapper>
    )
}
