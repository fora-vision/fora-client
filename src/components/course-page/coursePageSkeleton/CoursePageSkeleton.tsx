import { CoursePageContent } from '../../../pages/course/Styled'
import { ComponentSkeleton } from '../../skeletons'

export const CoursePageSkeleton = ({ isLoading }: { isLoading: boolean }) => {
  return isLoading ? (
    <CoursePageContent>
      <ComponentSkeleton height={550} width={316} />
      <ComponentSkeleton height={550} width={743.15} />
      <ComponentSkeleton height={550} width={316.2} />
    </CoursePageContent>
  ) : <></>
}