import logoPath from '../../images/Fora-logo.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Loading = () => {
  return (
    <Wrapper><img src={logoPath} alt="Fora" width={'36px'} height={'46px'} /></Wrapper>
  )
}
