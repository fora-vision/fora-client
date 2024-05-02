import { WorkoutType } from '../../hooks/use-workoutsByDate.hook'
import { GrayLine } from '../lines'
import { Dividers, WorkoutsWrapper } from './Styled'
import { schedulerTime } from './Time'
import { WorkoutsItems } from './WorkoutsItems'

// const workoutsMocks = [
//   {
//     name: 'Утренняя разминка',
//     duration: 0.75,
//     startTime: '08:00',
//     endTime: '08:45',
//     courseName: "Лагерь"
//   },
//   {
//     name: 'Пресс 8 подходов',
//     duration: 0.5,
//     startTime: '09:00',
//     endTime: '09:30',
//     courseName: "Поддержка"
//   },
//   {
//     name: 'Водный баланс 1 литр (утро)',
//     duration: 1,
//     startTime: '09:00',
//     endTime: '10:00',
//     courseName: "Поддержка"
//   },
//   {
//     name: 'Утренний бег (5км)',
//     duration: 1.5,
//     startTime: '11:00',
//     endTime: '12:30',
//     courseName: "Марафон 3.0"
//   },
//   {
//     name: 'Дневной бег (6км)',
//     duration: 1.5,
//     startTime: '14:00',
//     endTime: '15:30',
//     courseName: "Марафон 3.0"
//   },
//   {
//     name: 'Дыхание',
//     duration: 0.333,
//     startTime: '14:00',
//     endTime: '14:20',
//     courseName: "Йога Апрель"
//   },
//   {
//     name: 'Вод. баланс 1Л (день)',
//     duration: 0.75,
//     startTime: '14:00',
//     endTime: '14:45',
//     courseName: "Поддержка"
//   },
//   {
//     name: 'Дневной кальян',
//     duration: 0.5,
//     startTime: '16:00',
//     endTime: '16:30',
//     courseName: "Самый дымный"
//   }
// ]

export const Workouts = ({ monthWorkouts }: { monthWorkouts: WorkoutType[] }) => {
  return (
    <WorkoutsWrapper>
      <WorkoutsItems workouts={monthWorkouts} />
      <Dividers>
        {schedulerTime.slice(0, -1).map((_, index) => (
          <GrayLine key={index} />
        ))}
      </Dividers>
    </WorkoutsWrapper>
  )
}
