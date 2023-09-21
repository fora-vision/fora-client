import styled from 'styled-components'
import { AccountPhoto } from '../../header/account-panel/AccountPhoto'
import { P } from '../../typographic'
import { Level } from '../../Level/Level'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const HeaderUser = ({ photoUrl, userName, level }) => {
  return (
    <Wrapper>
      <AccountPhoto photoUrl={photoUrl} />
      <P>{userName}</P>
      <Level score={level} />
    </Wrapper>
  )
}
