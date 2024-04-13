import { PSmall } from '../typographic'
import { TimeWrapper } from './Styled'

export const schedulerTime = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

export const Time = () => {
  return (
    <TimeWrapper>
      {schedulerTime.map((time, index) => {
        return <PSmall key={index} transparent={0.65}>{time}</PSmall>
      })}
    </TimeWrapper>
  )
}
