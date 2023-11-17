import styled from 'styled-components'
// import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { IWorkout } from '../../../interfaces/ICourse'
import { getCourseIconStatus } from '../../IconStatuses'
import { H2, P } from '../../typographic'
import { WorkoutProgram } from './WorkoutProgram'
import { PrimaryButton } from '../../buttons'
import { ReactComponent as RightArrowsIcon } from '../../../images/right-icon-black.svg'
import { PureWrapper } from '../../wrappers'

const Wrapper = styled(PureWrapper)`
  background:  rgba(245, 245, 245, 0.08);
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

const WorkoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const ButtonConteiner = styled.div`
  width: 300px;
`

const WorkoutTitleBox = styled(PureWrapper)`
  display: flex;
  gap: 8px;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
  padding: 12px 16px;
`

export const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  const { t } = useTranslation()
  const status = getCourseIconStatus(workout.status);
  // const formattedStartDate = dayjs.unix(workout.start_date).format('DD/MM');
  // const formattedDeadline = dayjs.unix(workout.deadline).format('DD/MM');

  const handleStart = () => {
    window.open(workout.program_video_link, '_blank');
  }

  return (
    <Wrapper>
      <WorkoutHeader>
        <WorkoutTitleBox>
          {status}
          <H2>{workout.name}</H2>
        </WorkoutTitleBox>
        {/* <WorkoutTitleBox>
          <P>{formattedStartDate} - {formattedDeadline}</P>
        </WorkoutTitleBox> */}
      </WorkoutHeader>
      <WorkoutProgram workout={workout} />
      <ButtonWrapper>
        <ButtonConteiner>
          <PrimaryButton disabled={workout.status === 0} onClick={handleStart}>
            {t('components.courseCard.startTraining')}
            <RightArrowsIcon />
          </PrimaryButton>
        </ButtonConteiner>
      </ButtonWrapper>
    </Wrapper>
  )
}
