import { useTranslation } from "react-i18next"
import { H2Regular } from "../../typographic"
import { CourseCalendar } from "../../calendar/CourseCalendar"
import { CoursesSection, DashboardWrapper, YourCoursesWrapper } from "./CourseDashboard"
import { ComponentSkeleton } from "../../skeletons"
import styled from "styled-components"
import dayjs from "dayjs"

const HeaderCourses = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 9px;
    height: 32px;
`

export const DashboardSkeleton = () => {
    const { t } = useTranslation()
    return (
        <DashboardWrapper>
            <CourseCalendar date={dayjs()} handleNextMonth={() => { }} handlePrevMonth={() => { }} />
            <YourCoursesWrapper>
                <HeaderCourses>
                    <H2Regular>{t('pages.dashboard.yourCourses')}</H2Regular>
                    <div>
                        <ComponentSkeleton width={215} height={32} />
                    </div>
                </HeaderCourses>
                <CoursesSection>
                    <ComponentSkeleton height={227.12} />
                    <ComponentSkeleton height={227.12} />
                </CoursesSection>
            </YourCoursesWrapper>
        </DashboardWrapper>
    )
}
