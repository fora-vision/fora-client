import { styled } from 'styled-components'
import { ReactComponent as ArrowsMoreIcon } from '../../images/arrows-more-white.svg'
import { H2 } from '../../components/typographic'
import { SecondaryButton } from '../../components/buttons'
import { useTranslation } from 'react-i18next'

const JoinCourseWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const JoinCourseSectionTitle = styled.div`
  display: flex;
  gap: 4px;
  alignItems: center;
`

export const JoinCourseSection = () => {
  const { t } = useTranslation();
  return (
    <JoinCourseWrapper>
      <JoinCourseSectionTitle>
        <H2>{t('pages.dashboard.yourCourses')}</H2>
        <ArrowsMoreIcon />
      </JoinCourseSectionTitle>
      <SecondaryButton>{t('pages.dashboard.joinCourse')}</SecondaryButton>
    </JoinCourseWrapper>
  )
}
