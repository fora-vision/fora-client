import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { PrimaryButton } from '../buttons'
import { ReactComponent as RightArrowsIcon } from '../../images/right-icon-black.svg'
import { H1, P } from '../typographic'
import { ProgressLine } from '../progress/ProgressLine'

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

export const CardActions = ({ lessonsDone, lessonsTotal }: { lessonsDone: number, lessonsTotal: number }) => {
  const { t } = useTranslation();
  const lessonsProgress = Number(((lessonsDone / lessonsTotal) * 100).toFixed(0));
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
        <PrimaryButton>
          {t('components.courseCard.startTraining')}
          <RightArrowsIcon />
        </PrimaryButton>
      </OverallProgress>
    </CardActionsWrapper>
  )
}
