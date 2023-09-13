import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageContainer } from '../../components/pageContainer'
import { EllipseLeft, EllipseRight } from '../../components/ellipses'
import { LogInWrapper } from '../../components/wrappers'
import { PrimaryButton } from '../../components/buttons'
import { ResetHeader } from '../../components/reset-page/ResetHeader'
import { Stepper } from '../../components/stepper/Stepper'
import { InputEmailSection, NewPasswordSection } from '../../components/reset-page/ResetSections'
import { ResetCodeSection } from '../../components/reset-page/ResetCodeSection'

export const Reset = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const stepNames = [t('stepper.steps.email'), t('stepper.steps.code'), t('stepper.steps.newPassword')]
  const totalSteps = stepNames.length

  const sendEmail = () => {
    console.log('Send email to API - ', email)
    setStep((step) => step + 1)
  }

  const checkOtp = () => {
    console.log('Send OTP code to API - ', otpCode)
    setStep((step) => step + 1)
  }

  const createAndSendNewPassword = () => {
    console.log('Send new password to API - ', newPassword)
    navigate('/authentication')
  }

  const buttonDataBySteps = [{
    text: t('stepper.buttons.sendCode'),
    callback: sendEmail,
  }, {
    text: t('stepper.buttons.next'),
    callback: checkOtp,
  }, {
    text: t('stepper.buttons.confirm'),
    callback: createAndSendNewPassword,
  }]

  const sectionComponents = [
    <InputEmailSection state={email} setState={setEmail} />,
    <ResetCodeSection state={otpCode} setState={setOtpCode} />,
    <NewPasswordSection state={newPassword} setState={setNewPassword} />
  ];

  return (
    <PageContainer>
      <LogInWrapper>
        <ResetHeader />
        <Stepper totalSteps={totalSteps} activeStep={step} stepNames={stepNames} />
        {sectionComponents[step]}
        <PrimaryButton onClick={buttonDataBySteps[step].callback}>{buttonDataBySteps[step].text}</PrimaryButton>
      </LogInWrapper>
      <EllipseLeft />
      <EllipseRight />
    </PageContainer>
  )
}
