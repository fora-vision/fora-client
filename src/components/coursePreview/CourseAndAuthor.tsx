import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { IExpandedCourse } from '../../interfaces/ICourse'
import { InfoBlock } from './CoursePreview'
import { BlackH2Regular, BlackPSmall, BlackUppercasePSmall, BoldBlackP } from '../typographic'
import { DarkGrayLine } from '../lines'
import { PureWrapper } from '../wrappers'
import { AccountPhotoWrapper, EmptyPhoto } from '../header/account-panel/Styled'

const CourseHeader = styled(PureWrapper)`
    background: #F6D658;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`

const AuthorWrapper = styled.div`
    display: flex;
    gap: 15px;
`

export const CourseAndAuthor = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  const courseAuthorPhoto = course.author.avatar_url;
  return (
    <CourseHeader>
      <InfoBlock>
        <BlackUppercasePSmall transparent={0.5}>{t('course.course')}</BlackUppercasePSmall>
        <BlackH2Regular>{course.name}</BlackH2Regular>
      </InfoBlock>
      {course.author.name && <>
        <DarkGrayLine />
        <AuthorWrapper>
          <AccountPhotoWrapper>
            {courseAuthorPhoto ? <img src={courseAuthorPhoto} alt="Author" /> : <EmptyPhoto>{course.author.name[0]}</EmptyPhoto>}
          </AccountPhotoWrapper>
          <InfoBlock>
            <BlackPSmall transparent={0.5}>{t('course.author')}</BlackPSmall>
            <BoldBlackP>{course.author.name}</BoldBlackP>
          </InfoBlock>
        </AuthorWrapper>
      </>}
    </CourseHeader>
  )
}
