import { useNavigate } from 'react-router-dom'
import { Level } from '../../level/Level'
import { AccountPhoto } from '../../header/account-panel/AccountPhoto'
import { HeaderUserWrapper, HeaderUsername } from './Styled'

interface IHeaderUser {
  username: string,
  level: number
}

export const HeaderUser = ({ username, level }: IHeaderUser) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/profile')
  }

  return (
    <HeaderUserWrapper onClick={handleClick}>
      <AccountPhoto />
      <HeaderUsername>{username}</HeaderUsername>
      <Level score={level} />
    </HeaderUserWrapper>
  )
}
