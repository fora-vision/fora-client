import styled from "styled-components"
import { SecondaryButton } from "../../buttons"

export const Wrapper = styled.div`
  margin-top: 24px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const LogoutButton = styled(SecondaryButton)`
  border-color: #623434;
  width: 176px;
  height: 54px;
`

export const PhotoWrapper = styled.div`
  position: relative;
`
