import styled from "styled-components"
import { PrimaryButton } from "../../buttons"

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  justify-content: flex-end
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 408px;  
`

export const FormButton = styled(PrimaryButton)`width: 176px`