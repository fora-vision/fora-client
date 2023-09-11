import { styled } from "styled-components"

export const StepTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  font-size: 12px;
`

export const StepLine = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 1px; 
  background: rgba(245, 245, 245, 0.20);
`

export const ActiveStepLine = styled(StepLine)`
  background: #F6D658;
`

export const StepNumber = styled.div`
  width: 20px;
  height: 20px;
  background: rgba(245, 245, 245, 0.20);
  border-radius: 50%;
  color: rgba(245, 245, 245, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ActiveStepNumber = styled(StepNumber)`
  background: #F6D658;
  color: #11100E;
`
