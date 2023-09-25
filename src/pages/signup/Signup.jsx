import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
import { isValidDate, isValidName, validateEmail, validateHeight, validateWeight } from '../../utils/validation-utils'
import { sexOptions } from '../../utils/constants'
import { updateProfile } from '../../utils/API/user/api-user'
import { sendCode, sendEmail } from '../../utils/API/auth/api-auth'

const SignupButtons = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  padding-bottom: 16px;
`

export const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();
  const tempSessionCode = location.state?.tempSessionCode;

  const [step, setStep] = useState(location.state?.step || 0);

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isAcceptData, toggleAcceptData] = useToggle()
  const [acceptDataError, setAcceptDataError] = useState('')

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [birth, setBirth] = useState('')
  const [birthError, setBirthError] = useState('')

  const [height, setHeight] = useState('')
  const [errorHeight, setErrorHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [errorWeight, setErrorWeight] = useState('')
  const [sex, setSex] = useState('')
  const [errorSex, setErrorSex] = useState('')

  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState('')

  const stepNames = [t('stepper.steps.email'), t('stepper.steps.code'), t('stepper.steps.name'), t('stepper.steps.body')]
  const totalSteps = stepNames.length

  const sectionComponents = [
    <InputEmailSection state={email} setState={setEmail} isAcceptData={isAcceptData} toggleAcceptData={toggleAcceptData}
      emailError={emailError}
      acceptDataError={acceptDataError} />,
    <SignupCodeSection email={email} state={code} setState={setCode} codeError={codeError} />,
    <NameSection name={name} setName={setName} lastName={lastName} setLastName={setLastName}
      birth={birth}
      setBirth={setBirth}
      nameError={nameError}
      lastNameError={lastNameError}
      birthError={birthError} />,
    <BodySection height={height} setHeight={setHeight} weight={weight} setWeight={setWeight}
      sex={sex}
      setSex={setSex}
      errorHeight={errorHeight}
      errorWeight={errorWeight}
      errorSex={errorSex} />
  ];

  const handleBack = () => {
    if (step === 0) {
      navigate('/authentication')
    } else {
      setStep((step) => step - 1)
    }
  }

  const sendToApiEmail = async () => {
    if (isAcceptData) {
      setAcceptDataError('')
      setEmailError('')
      const isEmailValid = validateEmail(email)
      if (isEmailValid) {
        try {
          await sendEmail(email).then(() => { setStep((step) => step + 1) })
        } catch (error) {
          setEmailError(t('errorMessages.server'))
        }
      } else {
        setEmailError(t('errorMessages.email.notValid'))
      }
    } else {
      setAcceptDataError(t('errorMessages.acceptData'))
    }
  }

  const sendToApiCode = async () => {
    if (code.length === 6) {
      setCodeError(false)
      try {
        const sessionCode = await sendCode(email, code).then(result => {
          return result.session
        })
        // const userInfo = await getUserInfo(sessionCode) ------ Ниже временное решение пока путь апи не работает, потом меняй на это
        const userInfo = { name: 'Nikitos ' }
        if (userInfo.name) {
          setCodeError(t('errorMessages.alreadyRegistered'))
        } else {
          navigate('/signup', { state: { tempSessionCode: sessionCode }, replace: true });
          setStep((step) => step + 1)
        }
      } catch (error) {
        setCodeError(t('errorMessages.code.invalid'))
      }
    } else {
      setCodeError(`${t('errorMessages.code.length')} ${code.length}`)
    }
  }

  const sendName = () => {
    if (!isValidName(name)) {
      setNameError(t('errorMessages.name'))
      return;
    } else {
      setNameError('')
    }
    if (!isValidName(lastName)) {
      setLastNameError(t('errorMessages.lastName'))
      return;
    } else {
      setLastNameError('')
    }
    if (!isValidDate(birth)) {
      setBirthError(t('errorMessages.birth'))
      return;
    } else {
      setBirthError('')
    }
    setStep((step) => step + 1);
  };

  const sendBody = () => {
    if (!validateHeight(height)) {
      setErrorHeight(t('errorMessages.height'))
      return;
    } else {
      setErrorHeight('')
    }
    if (!validateWeight(weight)) {
      setErrorWeight(t('errorMessages.weight'))
      return;
    } else {
      setErrorWeight('')
    }
    if (!sex) {
      setErrorSex(t('errorMessages.sex'))
      return;
    } else {
      setErrorSex('')
    }

    const updateProfileData = {
      username: '',
      name: `${name} ${lastName}`,
      avatar: '',
      local: '',
      sex: sexOptions.indexOf(sex),
      weight: Number(weight),
      height: Number(height),
      body_type: '',
      birthday_year: Number(birth.slice(6, 10)),
      birthday_month: Number(birth.slice(3, 5)),
    };
    console.log(updateProfileData)

    console.log(tempSessionCode)

    const updateProfileReult = updateProfile(updateProfileData, tempSessionCode)
    console.log(updateProfileReult)

    // ... выполните отправку данных на сервер
    // navigate('/dashboard');
  }

  const buttonDataBySteps = [{
    text: t('stepper.buttons.next'),
    callback: sendToApiEmail,
  }, {
    text: t('stepper.buttons.login'),
    callback: sendToApiCode,
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
