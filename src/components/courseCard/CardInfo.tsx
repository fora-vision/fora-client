import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { H1, H2, P, PSmall } from '../typographic'
import { VerticalGrayLine } from '../lines'
import { ReactComponent as LeaderboardIcon } from '../../images/leaderboard-icon.svg'
import { ReactComponent as GroupIcon } from '../../images/group-icon.svg'

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
`

const CourseInfo = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: #252525;
  padding: 12px 16px;  
  display: flex;
  gap: 24px;
`

const CourseMetrics = styled.div`
  padding: 8px 16px;
  display: inline-flex;
  gap: 24px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0.75;
  background: #252525;
`

const MetricBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

export const CardInfo = () => {
  const { t } = useTranslation();
  return (
    <CardInfoWrapper>
      <CourseInfo>
        <div>
          <PSmall transparent={0.5}>{t('components.courseCard.course')}</PSmall>
          <H2>Сильные руки</H2>
        </div>
        <VerticalGrayLine />
        <div>
          <PSmall transparent={0.5}>1/08-24/08</PSmall>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <H1>8</H1>
            <P>{t('components.courseCard.lessons')}</P>
          </div>
        </div>
      </CourseInfo>
      <CourseMetrics>
        <MetricBox>
          <LeaderboardIcon />
          <P>2</P>
        </MetricBox>
        <MetricBox>
          <GroupIcon />
          <P>24</P>
        </MetricBox>
      </CourseMetrics>
    </CardInfoWrapper>
  )
}
