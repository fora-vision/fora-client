import { styled } from 'styled-components'
import { generateSteps } from '../../utils/stepper-utils'
import { IStepper } from '../../interfaces/IStepper'

const StepperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
`

export const Stepper = ({ totalSteps, activeStep, stepNames }: IStepper) => {
  const elements = generateSteps(totalSteps, activeStep, stepNames)
  return <StepperWrapper>
    {elements}
  </StepperWrapper>
}
