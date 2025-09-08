import styled from 'styled-components'
import { IExercise } from '../../../interfaces/ICourse'
import { P } from '../../typographic'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 24px;
`

export const Exercise = ({ exercise }: { exercise: IExercise }) => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <P transparent={0.75}>{t(`exercises.${exercise.label}`)}</P>
      <P transparent={0.75}>{exercise.value} {t('pages.course.repeats')}</P>
    </Wrapper>
  )
}
