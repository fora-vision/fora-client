import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { PrimaryButton, SecondaryButton } from '../buttons'
import { ReactComponent as RightArrowsIcon } from '../../images/right-icon-black.svg'
import { H1, P } from '../typographic'
import { ProgressLine } from '../progress/ProgressLine'
import { sessionStore } from '../../store/sessionStore'
import { getRoomUrl } from '../../utils/API/courses/api-courses'
import { ICourse } from '../../interfaces/ICourse'
import { Loader } from '../loader/Loader'
import { useToggle } from '../../hooks/hookToggle'

const CardActionsWrapper = styled.div`
  width: 420px; 
`

const OverallProgress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
`

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  align-items: center;
`

const NumericalProgress = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`

export const CardActions = ({ lessonsDone, lessonsTotal, course }: { lessonsDone: number, lessonsTotal: number, course: ICourse }) => {
  const { t } = useTranslation();
  const [isLoadingExercise, toggleLoadingExercise] = useToggle()
  const lessonsProgress = Number(((lessonsDone / lessonsTotal) * 100).toFixed(0));
  const token = sessionStore.getSessionCode()
  const handleLink = async () => {
    if (token) {
      toggleLoadingExercise()
      try {
        const result = await getRoomUrl(token, course.id, course.workout_num)
        window.open(result.url, '_blank');
      } catch (error) {
        console.log(error)
      }
      toggleLoadingExercise()
    }
  }
  return (
    <CardActionsWrapper>
      <OverallProgress>
        <div>
          <ProgressInfo>
            <NumericalProgress>
              <H1>{lessonsProgress}%</H1>
              <P transparent={0.75}>({lessonsDone}/{lessonsTotal})</P>
            </NumericalProgress>
            <P>{t('components.courseCard.overallProgress')}</P>
          </ProgressInfo>
          <ProgressLine progress={lessonsProgress} />
        </div>
        {lessonsProgress === 100 ?
          <SecondaryButton disabled>{t('components.courseCard.openCourse')}</SecondaryButton>
          : <PrimaryButton onClick={handleLink} disabled={isLoadingExercise}>
            {isLoadingExercise ? <Loader /> : <>
              {t('components.courseCard.startTraining')}
              <RightArrowsIcon />
            </>}
          </PrimaryButton>
        }
      </OverallProgress>
    </CardActionsWrapper>
  )
}
