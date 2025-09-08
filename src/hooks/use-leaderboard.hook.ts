import { useEffect, useState } from 'react'
import { getCourseLeaderboard } from '../utils/API/courses/api-courses'
import { ICourse, IExpandedCourse, ILeaderboardUser } from '../interfaces/ICourse'
import { userStore } from '../store/profileStore'
import { sortByScore } from '../utils/course-utils'

type CourseType = ICourse | IExpandedCourse;

export const useLeaderboard = (course: CourseType) => {
  const [leaderboard, setLeaderboard] = useState<{ users: ILeaderboardUser[] }>({ users: [] })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const fetchLeaderboard = async () => {
      const leaderboard = await getCourseLeaderboard(course.course_id || course.id)
      return leaderboard
    }
    fetchLeaderboard().then(res => {
      setLeaderboard(res)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [course.course_id, course.id])

  const myProfile = userStore.getUserProfile();
  const myName = myProfile.name;
  const users = leaderboard.users;
  const sortedUsers = users.sort(sortByScore);
  const myUser = users.find(user => user.name === myName)
  const myPlace = sortedUsers.findIndex(user => user.name === myName) + 1;
  const totalUsers = users.length;

  return { loading, users, myName, sortedUsers, myUser, totalUsers, myPlace }
}
