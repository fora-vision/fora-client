import dayjs from 'dayjs';
import { OutsideMonthDay, Day, DayDots, Dot } from '../../components/calendar/Day'
import { useState } from 'react';
import { CalendarEvent } from '../../components/calendar/CalendarEvent/CalendarEvent';
import { CalendarEventsList } from '../../components/calendar/CalendarEventsList';

const isEventOnDay = (day, month, year, event) => {
  const eventStart = dayjs(event.startDate);
  const eventEnd = dayjs(event.endDate);
  const checkDate = dayjs(new Date(year, month, day)).startOf('day');

  return checkDate.isSame(eventStart) || checkDate.isSame(eventEnd) || (checkDate.isAfter(eventStart) && checkDate.isBefore(eventEnd));
};

export const renderDays = (date, displayMonth, displayYear, events) => {
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
    let dayEvents = events.filter(event => isEventOnDay(i, displayMonth, displayYear, event));
    const isToday = i === currentDay && displayMonth === currentMonth && displayYear === currentYear;
    days.push(<CalendarEventsList key={`current-month-day-${previousMonthLastDay - i + 1}`} i={i} isToday={isToday} dayEvents={dayEvents} />);
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