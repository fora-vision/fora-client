import { ReactComponent as Up } from '../../../images/leaderboard/up.svg'
import { ReactComponent as Down } from '../../../images/leaderboard/down.svg'


export const Trend = ({ position, previousPosition }: { position: number, previousPosition: number }) => {
  return (
    <>
      {position < previousPosition && <Up />}
      {position > previousPosition && <Down />}
    </>
  )
}
