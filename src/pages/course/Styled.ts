import styled from "styled-components"
import { PageContainer } from "../../components/pageContainer"

export const CoursePageContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;
  padding-top: 15px;
  @media(max-width: 1200px) {
    flex-direction: column;
  }
`

export const CoursePageContainer = styled(PageContainer)`
  padding-top: 0;
`
