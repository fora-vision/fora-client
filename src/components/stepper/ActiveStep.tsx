import { ActiveStepLine, ActiveStepNumber, StepTitle, StepWrapper } from './StepStyledComponents'

export const ActiveStep = (stepNumber: number, stepName: string) => {
  return <StepWrapper key={stepNumber}>
    <StepTitle>
      <ActiveStepNumber>
        {stepNumber + 1}
      </ActiveStepNumber>
      {stepName}
    </StepTitle>
    <ActiveStepLine />
  </StepWrapper>
}
