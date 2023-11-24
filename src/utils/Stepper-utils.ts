import { ActiveStep } from "../components/stepper/ActiveStep";
import { Step } from "../components/stepper/Step";

export const generateSteps = (
  totalSteps: number,
  activeStep: number,
  stepNames: string[]
) => {
  const elements = [];
  for (let step = 0; step < totalSteps; step++) {
    if (step === activeStep) {
      const stepElement = ActiveStep(step, stepNames[step]);
      elements.push(stepElement);
    } else {
      const stepElement = Step(step, stepNames[step]);
      elements.push(stepElement);
    }
  }
  return elements;
};
