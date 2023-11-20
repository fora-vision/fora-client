import styled from 'styled-components'
import { CoursePageContent } from '../../../pages/course/Styled'
import { ComponentSkeleton } from '../../skeletons'

const TabletSkeleton = styled(ComponentSkeleton)`
  @media(max-width: 1200px) {
    width: 100% !important;
  }
`

export const CoursePageSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <CoursePageContent>
      <TabletSkeleton height={550} width={316} />
      <TabletSkeleton height={550} width={743.15} />
      <TabletSkeleton height={550} width={316.2} />
    </CoursePageContent>
  ) : <></>
}