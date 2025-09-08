import { useState } from 'react'
import { CourseCalendar } from '../calendar/CourseCalendar'
import { WorkoutScheduler } from '../workoutScheduler/WorkoutScheduler'
import { Wrapper } from './Styled'
import dayjs from 'dayjs'

export const CalendarAndScheduler = () => {
  const [date, setDate] = useState(dayjs())

  const handleNextMonth = () => {
    const nextMonthDate = dayjs(date).add(1, 'month');
    setDate(nextMonthDate)
  }

  const handlePrevMonth = () => {
    const prevMonthDate = dayjs(date).subtract(1, 'month');
    setDate(prevMonthDate)
  }

  return (
    <Wrapper>
      <CourseCalendar date={date} handleNextMonth={handleNextMonth} handlePrevMonth={handlePrevMonth} />
      <WorkoutScheduler date={date}/>
    </Wrapper>
  )
}
