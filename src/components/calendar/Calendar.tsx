import styled from "styled-components"
import { Dayjs } from 'dayjs';
import { renderDays } from "../../utils/calendar/calendar-utils";
import { CalendarWeekDays } from "./CalendarWeekDays";

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

export const Calendar = ({ date, displayMonth, displayYear }: { date: Dayjs, displayMonth: number, displayYear: number }) => {
  const monthDays = renderDays(date, displayMonth, displayYear)
  return (
    <Wrapper>
      <CalendarWeekDays />
      <DaysGrid>{monthDays}</DaysGrid>
    </Wrapper>
  )
}
