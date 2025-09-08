import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as LeftArrowIcon } from "../../images/course-page/arrow-left.svg"
import { P } from '../typographic'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  display: inline-flex ;
  &:hover {
    text-decoration: underline;
  }
`

export const Breadcrumb = ({ route, text }: { route: string, text: string }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(route)
  }
  return (
    <Wrapper onClick={handleClick}>
      <LeftArrowIcon />
      <P transparent={0.75}>{text}</P>
    </Wrapper>
  )
}
