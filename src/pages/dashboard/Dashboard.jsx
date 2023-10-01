import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { PageContainer } from '../../components/pageContainer'
import { useToggle } from '../../hooks/hookToggle'
import { HeaderUser } from '../../components/dashboard-page/statusHeader/HeaderUser'
import { EmptyDashboard } from '../../components/dashboard-page/dashboardSection/EmptyDashboard'
import { JoinCourseModal } from '../../components/dashboard-page/JoinCourseModal'
import { getUserInfo } from '../../utils/API/user/api-user'
import { sessionStore } from '../../store/sessionStore'
import { userStore } from '../../store/profileStore'
import { getUserCourses } from '../../utils/API/courses/api-courses'
import { CoursesDashboard } from '../../components/dashboard-page/dashboardSection/CourseDashboard'
import { HeaderStats } from '../../components/dashboard-page/statusHeader/HeaderStats'

const StatusHeader = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  margin-bottom: 32px;
`
const fakeCourses = [
  {
    "max_users_count": 0,
    "name": "string",
    "description": "",
    "avatar": "",
    "deadline": 0,
    "program": {
      "workouts": [
        {
          "name": "string",
          "program_video_link": "string",
          "sets": [
            {
              "repeats": 0,
              "name": "string",
              "exercises": [
                {
                  "type": "TIME",
                  "label": "string",
                  "value": 0,
                  "modificators": []
                }
              ]
            }
          ]
        }
      ]
    },
    "id": 0,
    "users_count": 0,
    "invite_code": "string",
    "publish": true,
    "save_photos": true,
    "credites": 0,
    "author": {
      "name": ""
    }
  },
  {
    "max_users_count": 0,
    "name": "Май",
    "description": "-",
    "avatar": "",
    "deadline": 1685491200,
    "program": {
      "workouts": [
        {
          "name": "День 1",
          "program_video_link": null,
          "sets": [
            {
              "repeats": 2,
              "name": "",
              "exercises": [
                {
                  "type": "REPEATS",
                  "label": "star",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "pushups",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "twisting",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "squats",
                  "value": 10,
                  "modificators": []
                }
              ]
            }
          ]
        },
        {
          "name": "День 2",
          "program_video_link": null,
          "sets": [
            {
              "repeats": 2,
              "name": "",
              "exercises": [
                {
                  "type": "REPEATS",
                  "label": "knees_raising",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "jumping",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "side_plank-back",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "side_plank-straight",
                  "value": 10,
                  "modificators": []
                }
              ]
            }
          ]
        },
        {
          "name": "День 3",
          "program_video_link": null,
          "sets": [
            {
              "repeats": 2,
              "name": "",
              "exercises": [
                {
                  "type": "REPEATS",
                  "label": "burpee",
                  "value": 5,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "hip_thrust",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "side_leglifts-left",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "side_leglifts-right",
                  "value": 10,
                  "modificators": []
                }
              ]
            }
          ]
        },
        {
          "name": "День 4",
          "program_video_link": null,
          "sets": [
            {
              "repeats": 2,
              "name": "",
              "exercises": [
                {
                  "type": "REPEATS",
                  "label": "star",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "toe_touches",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "pushups",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "folding_bed",
                  "value": 10,
                  "modificators": []
                }
              ]
            }
          ]
        },
        {
          "name": "День 5",
          "program_video_link": null,
          "sets": [
            {
              "repeats": 2,
              "name": "",
              "exercises": [
                {
                  "type": "REPEATS",
                  "label": "knee_tightening",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "lunges-left",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "lunges-right",
                  "value": 10,
                  "modificators": []
                },
                {
                  "type": "REPEATS",
                  "label": "leglifts",
                  "value": 10,
                  "modificators": []
                }
              ]
            }
          ]
        }
      ]
    },
    "id": 4,
    "users_count": 12,
    "invite_code": "FORA",
    "publish": true,
    "save_photos": false,
    "credites": 935,
    "author": {
      "name": "",
      "avatar_url": null
    }
  }
]
export const Dashboard = () => {
  const [courses, setCourses] = useState([])
  const courseLength = courses.length;
  const user = userStore.getUserProfile()
  const [isJoin, toggleJoin] = useToggle();
  const [courseCode, setCourseCode] = useState('');
  const userName = user.name;
  const level = 0; // api data

  useEffect(() => {
    const fetchCourses = async () => {
      const token = sessionStore.getSessionCode()
      // const coursesFromApi = await getUserCourses(token)
      // setCourses(coursesFromApi)
      setCourses(fakeCourses)
    }
    fetchCourses()
  }, [])

  return (
    <div>
      <PageContainer>
        <StatusHeader>
          <HeaderUser userName={userName} level={level} courses={courses} />
          {courses && <HeaderStats courses={courses} />}
        </StatusHeader>
        {courseLength > 0 ? <CoursesDashboard courses={courses} toggleModal={toggleJoin} /> : <EmptyDashboard toggleModal={toggleJoin} />}
      </PageContainer>
      {isJoin && <JoinCourseModal code={courseCode} setCode={setCourseCode} toggleModal={toggleJoin} />}
    </div>
  )
}
