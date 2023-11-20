import { styled } from 'styled-components'
import { CardInfo } from './CardInfo'
import { CardActions } from './CardActions'
import { ICourse } from '../../interfaces/ICourse'
import { getCourseStatus } from '../Statuses'
import { useNavigate } from 'react-router-dom'

const CardWrapper = styled.div`
  background-color: rgba(245, 245, 245, 0.04);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(245, 245, 245, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.04);
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 1000px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const CourseCard = ({ course }: { course: ICourse }) => {
  const navigate = useNavigate()
  const courseStatus = getCourseStatus(course.status);
  const handleClick = () => {
    navigate(`/course/${course.id}`)
  }
  return (
    <CardWrapper onClick={handleClick}>
      <div>
        {courseStatus}
      </div>
      <CardContainer>
        <CardInfo course={course} />
        <CardActions course={course} />
      </CardContainer>
    </CardWrapper>
  )
}
