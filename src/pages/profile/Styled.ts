import styled from "styled-components"

export const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 16px 0 20px 0;
  max-width: 665px;
  @media(max-width: 1000px){
    padding: 0 20px 20px 20px;
  }
`

export const ProfileSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
