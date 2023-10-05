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

export const HeaderUser = ({ userName, level }) => {
  return (
    <Wrapper>
      <AccountPhoto />
      <HeaderUsername>{userName}</HeaderUsername>
      <Level score={level} />
    </Wrapper>
  )
}
