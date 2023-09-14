import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { PageContainer } from '../../components/pageContainer'
import { LogInWrapper } from '../../components/wrappers'
import { Stepper } from '../../components/stepper/Stepper'
import { EllipseLeft, EllipseRight } from '../../components/ellipses'
import { WelcomeToHeader } from '../../components/authentication-page/WelcomeToHeader'
import { InputEmailSection, NameSection, BodySection, SignupCodeSection } from '../../components/signup-page/SignupSections'
import { IconSecondaryButton, PrimaryButton, } from '../../components/buttons'
import { ReactComponent as ArrowLeftIcon } from '../../images/arrow-left.svg'
import { LogInSection } from '../../components/signup-page/LogInSection'
import { useToggle } from '../../hooks/hookToggle'

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
  const [isAcceptDate, toggleAcceptData] = useToggle()

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birth, setBirth] = useState('')

  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [sex, setSex] = useState('')

  const [code, setCode] = useState('')

  const stepNames = [t('stepper.steps.email'), t('stepper.steps.name'), t('stepper.steps.body'), t('stepper.steps.password')]
  const totalSteps = stepNames.length

  const sectionComponents = [
    <InputEmailSection state={email} setState={setEmail} isAcceptDate={isAcceptDate} toggleAcceptData={toggleAcceptData} />,
    <SignupCodeSection email={email} state={code} setState={setCode} />,
    <NameSection name={name} setName={setName} lastName={lastName} setLastName={setLastName} birth={birth} setBirth={setBirth} />,
    <BodySection height={height} setHeight={setHeight} weight={weight} setWeight={setWeight} sex={sex} setSex={setSex} />
  ];

  const handleBack = () => {
    if (step === 0) {
      navigate('/authentication')
    } else {
      setStep((step) => step - 1)
    }
  }

  const sendEmail = () => {
    if (isAcceptDate) {
      console.log(`${email} to API`) // сделать отправку ИМЕЙЛА + isAcceptDate (согласие с обработкой)  на апи и если ок - следующий шаг
      setStep((step) => step + 1)
    }
  }

  const sendCode = () => {
    console.log(`${code} to API`)  // сделать отправку КОДА и если ок - следующий шаг
    setStep((step) => step + 1)
  }

  const sendName = () => {
    console.log(`${name} ${lastName} ${birth} to API`)  // сделать отправку ПРОФИЛЯ и если ок - следующий шаг
    setStep((step) => step + 1)
  }

  const sendBody = () => {
    console.log(`${height} ${weight} ${sex} to API`)  // сделать отправку ТЕЛА и если ок - следующий шаг
    navigate('/authentication')
  }



  const buttonDataBySteps = [{
    text: t('stepper.buttons.next'),
    callback: sendEmail,
  }, {
    text: t('stepper.buttons.login'),
    callback: sendCode,
  }, {
    text: t('stepper.buttons.next'),
    callback: sendName,
  }, {
    text: t('stepper.buttons.signUp'),
    callback: sendBody,
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
