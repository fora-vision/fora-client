import styled from "styled-components";
import { JoinModal } from "../../dashboard-page/JoinCourseModal";

export const TextContent = styled.div`
display: flex;
flex-direction: column; 
gap: 12px;
`

export const UploadModal = styled(JoinModal)`
  width: 432px;
  padding: 0;
`

export const ModalContent = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

export const ButtonSection = styled.div`
  display: flex;
  gap: 8px;
  width: 100%
`

