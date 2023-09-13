import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { PageContainer } from '../../components/pageContainer'
import { LogInWrapper } from '../../components/wrappers'
import { Stepper } from '../../components/stepper/Stepper'
import { EllipseLeft, EllipseRight } from '../../components/ellipses'
import { WelcomeToHeader } from '../../components/authentication-page/WelcomeToHeader'
import { InputEmailSection, PasswordSection, NameSection, BodySection } from '../../components/signup-page/SignupSections'
import { IconSecondaryButton, PrimaryButton, } from '../../components/buttons'
import { ReactComponent as ArrowLeftIcon } from '../../images/arrow-left.svg'
import { LogInSection } from '../../components/signup-page/LogInSection'

const SignupButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  padding-bottom: 16px;
`

export const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birth, setBirth] = useState('')

  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [sex, setSex] = useState('')

  const [password, setPassword] = useState('')

  const stepNames = [t('stepper.steps.email'), t('stepper.steps.name'), t('stepper.steps.body'), t('stepper.steps.password')]
  const totalSteps = stepNames.length

  const sectionComponents = [
    <InputEmailSection state={email} setState={setEmail} />,
    <NameSection name={name} setName={setName} lastName={lastName} setLastName={setLastName} birth={birth} setBirth={setBirth} />,
    <BodySection height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} sex={sex} setSex={setSex} />,
    <PasswordSection state={password} setState={setPassword} />
  ];

  const handleBack = () => {
    if (step === 0) {
      navigate('/authentication')
    } else {
      setStep((step) => step - 1)
    }
  }

  const sendEmail = () => {
    console.log(`${email} to API`)
    setStep((step) => step + 1)
  }

  const sendName = () => {
    console.log(`${name} ${lastName} ${birth} to API`)
    setStep((step) => step + 1)
  }

  const sendBody = () => {
    console.log(`${height} ${weight} ${sex} to API`)
    setStep((step) => step + 1)
  }

  const sendPassword = () => {
    console.log(`${password} to API`)
    navigate('/authentication')
  }


  const buttonDataBySteps = [{
    text: t('stepper.buttons.next'),
    callback: sendEmail,
  }, {
    text: t('stepper.buttons.next'),
    callback: sendName,
  }, {
    text: t('stepper.buttons.next'),
    callback: sendBody,
  }, {
    text: t('stepper.buttons.signUp'),
    callback: sendPassword,
  }]


  return (
    <PageContainer>
      <LogInWrapper>
        <WelcomeToHeader />
        <Stepper totalSteps={totalSteps} activeStep={step} stepNames={stepNames} />
        {sectionComponents[step]}
        <SignupButtons>
          <IconSecondaryButton onClick={handleBack}><ArrowLeftIcon /></IconSecondaryButton>
          <PrimaryButton onClick={buttonDataBySteps[step].callback}>{buttonDataBySteps[step].text}</PrimaryButton>
        </SignupButtons>
        <LogInSection />
      </LogInWrapper>
      <EllipseLeft />
      <EllipseRight />
    </PageContainer>
  )
}
