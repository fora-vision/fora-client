import { Wrapper } from './Styled'
import logoPath from '../../images/logo.jpg'

export const Loading = () => {
  return (
    <Wrapper><img src={logoPath} alt="Fora" style={{ borderRadius: 4 }} width={40} height={40} /></Wrapper>
  )
}
