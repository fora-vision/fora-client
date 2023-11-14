import styled from 'styled-components'
import { LevelStick } from './LevelStick'
import { H2 } from '../typographic'

export const Wrapper = styled.div`
  border-radius: 2px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  padding: 16px; 
  background: rgba(245, 245, 245, 0.04);
  display: flex;
  gap: 4px;
  align-items: center;
`

const LevelScore = styled(H2)`
  padding-left: 8px;
`

export const Level = ({ score }: { score: number }) => {
  const exactScore = Math.round(score)
  return (
    <Wrapper>
      {Array(5).fill(null).map((_, index) => (
        <LevelStick key={index} active={index < exactScore} />
      ))}
      <LevelScore>
        {score ? score : '∞'}
      </LevelScore>
    </Wrapper>
  )
}
