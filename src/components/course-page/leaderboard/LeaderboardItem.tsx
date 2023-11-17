import styled from 'styled-components'
import { IUser } from '../../../interfaces/ICourse'
import { GrayLine } from '../../lines'
import { Position } from './Position'
import { Trend } from './Trend'
import { UserLevel } from '../../level/UserLevel'
import { PSmall } from '../../typographic'
import { You } from './You'

export const Wrapper = styled.div`
  padding: 16px 16px 10px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px; 
`

export const LeaderboardItem = ({ user, index, totalUsers, myName }: { user: IUser, index: number, totalUsers: number, myName?: string }) => {
  return (
    <>
      <Wrapper>
        {myName === user.name && <You />}
        <Trend position={user.position} previousPosition={user.previousPosition} />
        <Position position={user.position} />
        <PSmall>{user.name}</PSmall>
        <UserLevel score={user.level} />
      </Wrapper>
      {totalUsers - index !== 1 && <GrayLine />}
    </>
  )
}
