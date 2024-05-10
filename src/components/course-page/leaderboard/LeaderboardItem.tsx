import styled from 'styled-components'
import { ILeaderboardUser } from '../../../interfaces/ICourse'
import { GrayLine } from '../../lines'
import { Position } from './Position'
// import { Trend } from './Trend'

import { PSmall } from '../../typographic'
import { You } from './You'
import { UserLevel } from '../../Level'


export const Wrapper = styled.div`
  padding: 16px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px; 
`

export const LeaderboardItem = ({ user, index, totalUsers, myName }: { user: ILeaderboardUser, index: number, totalUsers: number, myName?: string }) => {
  return (
    <>
      <Wrapper>
        {myName === user.name && <You />}
        {/* <Trend position={user.position} previousPosition={user.previousPosition} /> */}
        <Position position={index + 1} />
        <PSmall>{user.name}</PSmall>
        <UserLevel score={user.score} />
      </Wrapper>
      {totalUsers - index !== 1 && <GrayLine />}
    </>
  )
}
