import styled from 'styled-components'
import { P } from '../../typographic'
import { Level } from '../../Level/Level'
import { AccountPhoto } from '../../header/account-panel/AccountPhoto'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const HeaderUsername = styled(P)`
  padding-right: 15px;
`

export const HeaderUser = ({ username, level }: { username: string, level: number }) => {
  return (
    <Wrapper>
      <AccountPhoto />
      <HeaderUsername>{username}</HeaderUsername>
      <Level score={level} />
    </Wrapper>
  )
}
