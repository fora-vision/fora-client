import styled from 'styled-components'
import { ReactComponent as FirstPolygon } from '../../../images/leaderboard/polygon-1.svg'
import { ReactComponent as SecondPolygon } from '../../../images/leaderboard/polygon-2.svg'
import { ReactComponent as ThirdPolygon } from '../../../images/leaderboard/polygon-3.svg'
import { ReactComponent as Polygon } from '../../../images/leaderboard/polygon.svg'
import { BlackP } from '../../typographic'

const SmallP = styled(BlackP)`
  font-size: 12px;
`

const Wrapper = styled.div`
  position: relative;
  top: 2px ;
`

const PositionNumber = styled.div`
  position: absolute;
  left: 32%;
  top: 5%;
`

export const Position = ({ position }: { position: number }) => {
  return (
    <Wrapper>
      <PositionNumber><SmallP>{position}</SmallP></PositionNumber>
      {position === 1 && <FirstPolygon />}
      {position === 2 && <SecondPolygon />}
      {position === 3 && <ThirdPolygon />}
      {position > 3 && <Polygon />}
    </Wrapper>
  )
}
