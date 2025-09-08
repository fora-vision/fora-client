import styled from 'styled-components'
import { IExercise } from '../../../interfaces/ICourse'
import { Exercise } from './Exercise'

const Wrapper = styled.div`
  padding-left: 16px;
`

export const SetExercises = ({ exercises }: { exercises: IExercise[] }) => {
  return (
    <Wrapper>
      {exercises.map((exercise, index) => {
        return <Exercise key={index} exercise={exercise} />
      })}
    </Wrapper>
  )
}
