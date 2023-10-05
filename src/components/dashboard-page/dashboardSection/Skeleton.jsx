import { useTranslation } from "react-i18next"
import { H2Regular } from "../../typographic"
import { CourseCalendar } from "../../calendar/CourseCalendar"
import { CoursesSection, DashboardWrapper, HeaderCourses, YourCoursesWrapper } from "./CourseDashboard"
import { ComponentSkeleton } from "../../skeletons"

export const DashboardSkeleton = () => {
    const { t } = useTranslation()
    return (
        <DashboardWrapper>
            <CourseCalendar />
            <YourCoursesWrapper>
                <HeaderCourses>
                    <H2Regular>{t('pages.dashboard.yourCourses')}</H2Regular>
                    <div>
                        <ComponentSkeleton width={250} height={32.5} />
                    </div>
                </HeaderCourses>
                <CoursesSection>
                    <ComponentSkeleton height={250} />
                    <ComponentSkeleton height={250} />
                </CoursesSection>
            </YourCoursesWrapper>
        </DashboardWrapper>
    )
}
