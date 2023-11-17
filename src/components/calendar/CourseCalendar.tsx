import { useState } from "react"
import styled from "styled-components"
import dayjs from "dayjs"
import { CalendarControl } from "./CalendarControl"
import { GrayLine } from "../lines"
import { useTranslation } from "react-i18next"
import { P } from "../typographic"
import { Calendar } from "./Calendar"
import { PureWrapper } from "../wrappers"

const FutureCalendar = styled(PureWrapper)`
  min-width: 392px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TodaySection = styled.div`
  padding-top: 8px;
  display: flex;
  align-items: center;
  opacity: 0.5;
  justify-content: space-between;
`

export const CourseCalendar = () => {
  const [date, setDate] = useState(dayjs())
  const today = dayjs().format('DD/MM/YYYY')
  const { t } = useTranslation();
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
      <CalendarControl date={date} cbNextMonth={handleNextMonth} cbPrevMonth={handlePrevMonth} />
      <FutureCalendar >
        <Calendar date={date} displayMonth={date.month()} displayYear={date.year()} />
        <div>
          <GrayLine />
          <TodaySection>
            <P>{t('calendar.today')}</P>
            <P>{today}</P>
          </TodaySection>
        </div>
      </FutureCalendar>
    </Wrapper>
  )
}
