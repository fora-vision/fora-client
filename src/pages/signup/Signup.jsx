import React, { useState } from 'react'
import { PageContainer } from '../../components/pageContainer'
import { LogInWrapper } from '../../components/wrappers'
import { Stepper } from '../../components/stepper/Stepper'
import { EllipseLeft, EllipseRight } from '../../components/ellipses'
import { WelcomeToHeader } from '../../components/authentication-page/WelcomeToHeader'
import { useTranslation } from 'react-i18next'
import { InputEmailSection, NewPasswordSection } from '../../components/signup-page/SignupSections'
import { PrimaryButton } from '../../components/buttons'

export const Signup = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const stepNames = [t('stepper.steps.email'), t('stepper.steps.name'), t('stepper.steps.body'), t('stepper.steps.password')]
  const totalSteps = stepNames.length

  const sectionComponents = [
    <InputEmailSection state={email} setState={setEmail} />,
    <NewPasswordSection state={newPassword} setState={setNewPassword} />
  ];

  return (
    <PageContainer>
      <LogInWrapper>
        <WelcomeToHeader />
        <Stepper totalSteps={totalSteps} activeStep={step} stepNames={stepNames} />
        {sectionComponents[step]}
        {/* <PrimaryButton onClick={buttonDataBySteps[step].callback}>{buttonDataBySteps[step].text}</PrimaryButton> */}
        <PrimaryButton>Dalee</PrimaryButton>
      </LogInWrapper>
      <EllipseLeft />
      <EllipseRight />
    </PageContainer>
  )
}
