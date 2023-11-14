import dayjs from 'dayjs';
import { OutsideMonthDay, Day } from '../../components/calendar/Day'

export const renderDays = (date, displayMonth, displayYear) => {
  const today = dayjs()
  const currentDay = today.date()
  const currentMonth = today.month();
  const currentYear = today.year();

  const daysInMonth = date.daysInMonth();
  const firstDayOfMonth = date.startOf('month').day() || 7;
  const previousMonthLastDay = date.subtract(1, 'month').endOf('month').date();

  const days = [];
  for (let i = firstDayOfMonth - 1; i > 0; i--) {
    days.push(<OutsideMonthDay key={`prev-month-day-${previousMonthLastDay - i + 1}`}>{previousMonthLastDay - i + 1}</OutsideMonthDay>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === currentDay && displayMonth === currentMonth && displayYear === currentYear;
    days.push(
      <Day key={`day-${i}`} isToday={isToday}>
        {i}
      </Day>
    );
  }
  const lastDayOfMonthWeekday = date.endOf('month').day();
  if (lastDayOfMonthWeekday !== 0) {
    const daysToAddFromNextMonth = 7 - lastDayOfMonthWeekday;
    for (let i = 1; i <= daysToAddFromNextMonth; i++) {
      days.push(<OutsideMonthDay key={`next-month-day-${i}`}>{i}</OutsideMonthDay>);
    }
  }

  return days;
};

