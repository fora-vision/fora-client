import { useState } from 'react'
import styled from 'styled-components'
import { IScheduleWorkout } from './WorkoutsItems'
import { WorkoutItem } from './WorkoutItem'
import { schedulerTime } from './Time'
import { IconTetriaryButton } from '../buttons'
import { ReactComponent as NextIcon } from '../../images/upcomming-trainings/next-icon.svg'
import { ReactComponent as PrevIcon } from '../../images/upcomming-trainings/prev-icon.svg'
import { StatusWrapper } from '../Statuses'
import { BoldBlackPSmall } from '../typographic'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const FewWorkoutsWrapper = styled.div<{ width: number, $top: number }>`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: ${props => props.width}%;
  position: absolute; 
  top: ${({ $top }) => `${$top * 71}px`};
`

const CustonPrevButton = styled(IconTetriaryButton) <{ $top: number }>`
  position: absolute;
  left: -15px;
  top: ${({ $top }) => `calc(${$top * 71}px + 40px)`};
`

const CustonNextButton = styled(CustonPrevButton)`
  left: 325px;
`

const BadgeWrapper = styled(StatusWrapper) <{ $top: number }>`
  position: absolute;
  background: #F6D658;
  left: -10px;
  z-index: 100;
  padding: 4px 10px;
  top: ${({ $top }) => `calc(${$top * 71}px - 10px)`};
`

export const FewWorkouts = ({ workouts }: { workouts: IScheduleWorkout[] }) => {
  const totalWorkouts = workouts.length;
  const [selectedWorkout, setSelectedWorkout] = useState(0);
  const isSelectLast = selectedWorkout === totalWorkouts - 1;
  const isSelectFirst = selectedWorkout === 0;

  const itemsWidth = totalWorkouts * 75;
  const startingHour = schedulerTime.findIndex(time => time === workouts[0].startTime);

  const handleNext = () => {
    if (isSelectLast) {
      return;
    }
    setSelectedWorkout(state => state + 1)
  }

  const handlePrev = () => {
    if (isSelectFirst) {
      return;
    }
    setSelectedWorkout(state => state - 1)
  }

  return <>
    <BadgeWrapper $top={startingHour}>
      <BoldBlackPSmall>{totalWorkouts}</BoldBlackPSmall>
    </BadgeWrapper>
    {!isSelectFirst && <CustonPrevButton $top={startingHour} onClick={handlePrev}>
      <PrevIcon />
    </CustonPrevButton>}
    {/* <Wrapper> */}
    <FewWorkoutsWrapper width={itemsWidth} $top={startingHour}>
      {workouts.map((workout, ind) => {
        return <WorkoutItem key={ind} workout={workout} fewWorkouts number={ind + 1} selected={selectedWorkout} />
      })}
    </FewWorkoutsWrapper>
    {/* </Wrapper> */}
    {!isSelectLast && <CustonNextButton $top={startingHour} onClick={handleNext}>
      <NextIcon />
    </CustonNextButton>}
  </>
}
