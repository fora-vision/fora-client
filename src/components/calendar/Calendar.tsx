import styled from "styled-components"
import { Dayjs } from 'dayjs';
import { renderDays } from "../../utils/calendar/calendar-utils";
import { CalendarWeekDays } from "./CalendarWeekDays";
import { CalendarEvent, IEvent, Theme } from "./CalendarEvent/CalendarEvent";

const Wrapper = styled.div`
  padding: 0 14.5px;
  padding-bottom: 35px;
`

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 21px);
  justify-content: space-between;
  row-gap: 60px;
`;

export const monthCalendarEvents = [
  {
    startDate: "2024-04-01",
    endDate: "2024-04-03",
    trainingName: "Тренировка ног",
    courseName: "Комплексный"
  },
  {
    startDate: "2024-04-05",
    endDate: "2024-04-06",
    trainingName: "Тренировка ног",
    courseName: "Комплексный"
  },
  {
    startDate: "2024-04-05",
    endDate: "2024-04-06",
    trainingName: "Тренировка рук",
    courseName: "Комплексный"
  },
  {
    startDate: "2024-04-17",
    endDate: "2024-04-20",
    trainingName: "Тренировка рук",
    courseName: "Комплексный"
  },
  {
    startDate: "2024-04-22",
    endDate: "2024-04-23",
    trainingName: "Тренировка рук",
    courseName: "Общий"
  },
  {
    startDate: "2024-04-13",
    endDate: "2024-04-14",
    trainingName: "Тренировка рук",
    courseName: "Марафон"
  },
]

const getThemeForCourse = (courses: IEvent[], courseName: string): Theme => {
  const uniqueCourses = Array.from(new Set(courses.map(event => event.courseName)));
  switch (uniqueCourses.indexOf(courseName)) {
    case 0:
      return 'red';
    case 1:
      return 'green';
    default:
      return 'default';
  }
};

export const Calendar = ({ date, displayMonth, displayYear }: { date: Dayjs, displayMonth: number, displayYear: number }) => {
  const monthCourses = monthCalendarEvents;
  const monthDays = renderDays(date, displayMonth, displayYear, monthCalendarEvents)

  return (
    <Wrapper>
      {monthCourses.map((event, index) => {
        const theme = getThemeForCourse(monthCourses, event.courseName);
        return <CalendarEvent key={index} event={event} theme={theme} />
      })}
      <CalendarWeekDays />
      <DaysGrid>{monthDays}</DaysGrid>
    </Wrapper>
  )
}
