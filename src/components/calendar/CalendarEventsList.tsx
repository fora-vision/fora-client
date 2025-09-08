import React, { useState } from 'react'
import { Day, DayDots, Dot } from './Day';
import { CalendarEvent, IEvent } from './CalendarEvent/CalendarEvent';
import styled from 'styled-components';

export const getColorForDot = (status: number) => {
  switch (status) {
    case 0:
      return '#343331';
    case 1:
      return '#F6D658';
    case 2:
      return '#5FB768';
    case 3:
      return '#C84848';
    default:
      return '#343331';
  }
}

export const getThemeForCourse = (status: number) => {
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
}

export const EventsWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  position: 'absolute',
  top: 0,
  visibility: 'visible',
  zIndex: 10,
  transition: 'all 0.4s ease'
});


export const CalendarEventsList = ({ i, isToday, dayEvents }: { i: number, isToday: boolean, dayEvents: IEvent[] }) => {
  const [isEvents, setIsEvents] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      <Day key={`day-${i}`} isToday={isToday} onMouseEnter={() => { setIsEvents(true) }} onMouseLeave={() => { setIsEvents(false) }}>
        {i}
      </Day>
      <DayDots>
        {dayEvents.map((event, index) => {
          const color = getColorForDot(event.status)
          return <Dot key={index} style={{ backgroundColor: color }} />
        })}
      </DayDots>
      <EventsWrapper style={{
        opacity: isEvents ? 1 : 0,
        visibility: isEvents ? 'visible' : 'hidden',
        transform: isEvents ? 'translateY(50px)' : 'translateY(40px)',

      }}>
        {dayEvents.map((event, index) => {
          const theme = getThemeForCourse(event.status);
          return <CalendarEvent key={index} event={event} theme={theme} />
        })}
      </EventsWrapper>
    </div>
  )
}
