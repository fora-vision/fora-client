import { styled } from 'styled-components'
import { CardInfo } from './CardInfo'
import { CardActions } from './CardActions'


const CardWrapper = styled.div`
  background-color: rgba(245, 245, 245, 0.04);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 24px;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CourseCard = () => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardInfo />
        <CardActions lessonsDone={2} lessonsTotal={8} />
      </CardContainer>
    </CardWrapper>
  )
}
