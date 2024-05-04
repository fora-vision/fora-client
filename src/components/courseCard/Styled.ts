import { styled } from 'styled-components'

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  width: 50%;
  @media(max-width: 1000px) {
    width: 100%;
    flex-direction: row;
  }
`

export const CourseInfo = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: #252525;
  padding: 12px 16px;  
  display: flex;
  gap: 24px;
  max-width: 100%;
  @media(max-width: 1000px) {
    width: calc(100% - 32px);
  }
`

export const CourseMetrics = styled.div`
  padding: 8px 16px;
  display: inline-flex;
  gap: 24px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0.75;
  background: #252525;
`

export const MetricBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

export const TotalLessonsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
