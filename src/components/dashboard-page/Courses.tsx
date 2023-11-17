import { DashboardSkeleton } from './dashboardSection/Skeleton'
import { CoursesDashboard } from './dashboardSection/CourseDashboard'
import { EmptyDashboard } from './dashboardSection/EmptyDashboard'
import { IExpandedCourse } from '../../interfaces/ICourse'

interface ICourses {
  coursesLoading: boolean,
  courses: IExpandedCourse[],
  toggleJoin: () => void
}

export const Courses = ({ coursesLoading, courses, toggleJoin }: ICourses) => {
  if (coursesLoading) {
    return <DashboardSkeleton />
  }

  return !!courses.length ? <CoursesDashboard courses={courses} toggleModal={toggleJoin} /> : <EmptyDashboard toggleModal={toggleJoin} />

}
