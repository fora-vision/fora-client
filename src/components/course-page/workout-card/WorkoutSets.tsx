import styled from 'styled-components'
import { ISet } from '../../../interfaces/ICourse'
import { Set } from './Set'

const Wrapper = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const WorkoutSets = ({ sets }: { sets: ISet[] }) => {
  const setsLength = sets.length;
  return (
    <Wrapper>
      {sets.map((set, index) => {
        return <Set set={set} setsLength={setsLength} key={index} index={index} />
      })}
    </Wrapper>
  )
}
