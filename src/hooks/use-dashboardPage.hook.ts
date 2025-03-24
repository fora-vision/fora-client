import { useState, useEffect } from 'react'
import { getUserCourses } from '../utils/API/courses/api-courses';
import { useToggle } from './use-toggle.hook';
import { sessionStore } from '../store/sessionStore';
import { userStore } from '../store/profileStore';
import { IExpandedCourse } from '../interfaces/ICourse';

export const useDashboardPage = () => {
  const [level, setLevel] = useState(0)
  const [courses, setCourses] = useState([])
  const [coursesLoading, setCoursesLoading] = useState(true);
  const user = userStore.getUserProfile()
  const [isJoin, toggleJoin] = useToggle();
  const [courseCode, setCourseCode] = useState('');
  const username = user.name;

  useEffect(() => {
    let totalWorkouts = 0;
    let totalDoneWorkouts = 0;
    courses.forEach((course: IExpandedCourse) => {
      totalDoneWorkouts += course.workout_num
      totalWorkouts += course.workouts_count
    })
    const totalLevel = ((totalWorkouts / totalDoneWorkouts) * 10).toFixed(0)
    setLevel(Number(totalLevel))
  }, [courses])

  useEffect(() => {
    const fetchCourses = async () => {
      const token = sessionStore.getSessionCode()
      if (token) {
        const coursesFromApi = await getUserCourses(token)
        setCourses(coursesFromApi)
      }
    }
    fetchCourses().then(() => { setCoursesLoading(false) }).catch((error) => { console.log(error) })
  }, [])

  return { username, level, courses, coursesLoading, toggleJoin, isJoin, courseCode, setCourseCode }
}
