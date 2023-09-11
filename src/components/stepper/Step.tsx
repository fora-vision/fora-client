import { StepLine, StepNumber, StepTitle, StepWrapper } from './StepStyledComponents'

export const Step = (stepNumber: number, stepName: string) => {
  return <StepWrapper key={stepNumber}>
    <StepTitle>
      <StepNumber>
        {stepNumber + 1}
      </StepNumber>
      {stepName}
    </StepTitle>
    <StepLine />
  </StepWrapper>
}
