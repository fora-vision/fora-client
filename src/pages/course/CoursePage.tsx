import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { CoursePageContainer, CoursePageContent } from './Styled';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb';
import { CourseInfo } from '../../components/course-page/CourseInfo';
import { CourseWorkouts } from '../../components/course-page/CourseWorkouts';
import { CourseLeaderboard } from '../../components/course-page/CourseLeaderboard';
import { useEffect } from 'react';
import { getCourse, getCourseWorkouts } from '../../utils/API/courses/api-courses';
import { sessionStore } from '../../store/sessionStore';
import { IExpandedCourse } from '../../interfaces/ICourse';
import { YellowBoldP } from '../../components/typographic';
import { CoursePageSkeleton } from '../../components/course-page/coursePageSkeleton/CoursePageSkeleton';

export const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<IExpandedCourse | null>(null)
  const [courseLoading, setCourseLoading] = useState(false)
  const [courseError, setCourseError] = useState(false)
  const [workoutsDays, setWorkoutDays] = useState([])

  useEffect(() => {
    const fetchCourse = async () => {
      setCourseLoading(true)
      setCourseError(false)
      const token = sessionStore.getSessionCode()
      if (token && courseId) {
        try {
          const courseFromApi = await getCourse(token, courseId)
          const workoutsFromApi = await getCourseWorkouts(token, courseId)
          setWorkoutDays(workoutsFromApi)
          setCourse(courseFromApi)
        } catch (error) {
          setCourseError(true)
          console.log(error)
        }
      }
      setCourseLoading(false)
    }
    fetchCourse()
  }, [courseId])

  return (
    <CoursePageContainer>
      <Breadcrumb route='/dashboard' text='Курсы' />
      <CoursePageSkeleton isLoading={courseLoading} />
      {course && <CoursePageContent>
        <CourseInfo course={course} />
        <CourseWorkouts course={course} workoutsDays={workoutsDays} />
        <CourseLeaderboard course={course} />
      </CoursePageContent>}
      {courseError && <YellowBoldP>Курс недоступен</YellowBoldP>}
    </CoursePageContainer>
  )
} 
