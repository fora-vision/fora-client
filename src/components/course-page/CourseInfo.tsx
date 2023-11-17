import styled from 'styled-components'
import { IExpandedCourse } from '../../interfaces/ICourse'
import { CourseAndAuthor } from '../coursePreview/CourseAndAuthor'
import { CourseProgress } from '../courseCard/CourseProgress'
import { CourseDuration } from '../coursePreview/CourseDuration'
import { GrayLine } from '../lines'
import { CourseWorkouts } from '../coursePreview/CourseWorkouts'
import { CourseUsers } from '../coursePreview/CourseUsers'
import { CourseRanking } from '../coursePreview/CourseRanking'
import { PureWrapper } from '../wrappers'

const Wrapper = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const SectionWrapper = styled(PureWrapper)`
  padding: 20px 16px;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CourseInfo = ({ course }: { course: IExpandedCourse }) => {
  return (
    <Wrapper>
      <CourseAndAuthor course={course} />
      <SectionWrapper>
        <CourseProgress course={course} />
      </SectionWrapper>
      <SectionWrapper>
        <CourseDuration course={course} />
        <GrayLine />
        <CourseWorkouts course={course} />
        <GrayLine />
        <CourseUsers course={course} />
        <GrayLine />
        <CourseRanking course={course} />
      </SectionWrapper>
    </Wrapper>
  )
}
