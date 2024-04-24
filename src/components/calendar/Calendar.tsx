import styled from "styled-components"
import { Dayjs } from 'dayjs';
import { renderDays } from "../../utils/calendar/calendar-utils";
import { CalendarWeekDays } from "./CalendarWeekDays";
import { CalendarEvent, IEvent, Theme } from "./CalendarEvent/CalendarEvent";

const Wrapper = styled.div`
  padding: 0 12.5px;
  padding-bottom: 15px;
`

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 41px);
  justify-content: space-between;
  row-gap: 30px;
`;

export const monthCalendarEvents = [
  {
    startDate: "2024-04-01",
    endDate: "2024-04-03",
    trainingName: "Тренировка ног",
    courseName: "Комплексный",
    status: 0,
  },
  {
    startDate: "2024-04-05",
    endDate: "2024-04-06",
    trainingName: "Тренировка ног",
    courseName: "Комплексный",
    status: 1,
  },
  {
    startDate: "2024-04-05",
    endDate: "2024-04-06",
    trainingName: "Тренировка рук",
    courseName: "Комплексный",
    status: 2,
  },
  {
    startDate: "2024-04-17",
    endDate: "2024-04-20",
    trainingName: "Тренировка рук",
    courseName: "Комплексный",
    status: 3,
  },
  {
    startDate: "2024-04-22",
    endDate: "2024-04-23",
    trainingName: "Тренировка рук",
    courseName: "Общий",
    status: 4,
  },
  {
    startDate: "2024-04-13",
    endDate: "2024-04-14",
    trainingName: "Тренировка рук",
    courseName: "Марафон",
    status: 1,
  },
]

const getThemeForCourse = (status: number): Theme => {
  switch (status) {
    case 0:
      return 'default';
    case 1:
      return 'yellow';
    case 2:
      return 'green';
    case 3:
      return 'red';
    default:
      return 'default';
  }
};

export const Calendar = ({ date, displayMonth, displayYear }: { date: Dayjs, displayMonth: number, displayYear: number }) => {
  const monthCourses = monthCalendarEvents;
  const monthDays = renderDays(date, displayMonth, displayYear, monthCalendarEvents)

  return (
    <Wrapper>
      {/* {monthCourses.map((event, index) => {
        const theme = getThemeForCourse(event.status);
        return <CalendarEvent key={index} event={event} theme={theme} />
      })} */}
      <CalendarWeekDays />
      <DaysGrid>{monthDays}</DaysGrid>
    </Wrapper>
  )
}
