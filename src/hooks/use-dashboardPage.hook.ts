import { useState, useEffect } from 'react'
import { getUserCourses } from '../utils/API/courses/api-courses';
import { useToggle } from './use-toggle.hook';
import { sessionStore } from '../store/sessionStore';
import { userStore } from '../store/profileStore';

export const useDashboardPage = () => {
  const [courses, setCourses] = useState([])
  const [coursesLoading, setCoursesLoading] = useState(true);
  const user = userStore.getUserProfile()
  const [isJoin, toggleJoin] = useToggle();
  const [courseCode, setCourseCode] = useState('');
  const username = user.name;
  const level = 0; // api data = будет позже 

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
