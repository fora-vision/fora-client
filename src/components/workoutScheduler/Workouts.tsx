import { GrayLine } from '../lines'
import { Dividers, WorkoutsWrapper } from './Styled'
import { schedulerTime } from './Time'
import { WorkoutsItems } from './WorkoutsItems'

const workoutsMocks = [
  {
    name: 'Анжумания',
    duration: 1,
    startTime: '08:00',
    endTime: '09:00',
    courseName: "Самый сильный"
  },
  {
    name: 'Бегит',
    duration: 1.5,
    startTime: '14:00',
    endTime: '15:30',
    courseName: "Самый мощный"
  },
  {
    name: 'Кальян',
    duration: 0.5,
    startTime: '16:00',
    endTime: '16:30',
    courseName: "Самый мощный"
  }
]

export const Workouts = () => {
  return (
    <WorkoutsWrapper>
      <WorkoutsItems workouts={workoutsMocks} />
      <Dividers>
        {schedulerTime.slice(0, -1).map((_, index) => (
          <GrayLine key={index} />
        ))}
      </Dividers>
    </WorkoutsWrapper>
  )
}
