import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { PersonalDataSection } from './PersonalDataSection'
import { LabeledInput } from '../labeledInput/LabeledInput'
import { LabeledSelect } from '../labeledSelect/LabeledSelect'
import { CodeSection } from '../codeSection/CodeSection'
import { WerePinSent } from '../authentication-page/WereCodeSent'
import { LabeledDateInput } from '../labeledInput/LabeledDateInput'
import { ErrorField } from '../errorField/ErrorField'
import { sexOptions } from '../../utils/constants'

const InputsSectionWrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputEmailSection = ({ state, setState, isAcceptData, toggleAcceptData, emailError, acceptDataError }) => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.reset.email')} id="email" placeholder={t('pages.reset.emailPlaceholder')} state={state} setState={setState} />
      {emailError && <ErrorField message={emailError} />}
      <PersonalDataSection isCheck={isAcceptData} toggleCheck={toggleAcceptData} error={acceptDataError} />
      {acceptDataError && <ErrorField message={acceptDataError} />}
    </InputsSectionWrapper>
  )
}

export const SignupCodeSection = ({ email, state, setState, codeError }) => {
  return (
    <InputsSectionWrapper>
      <WerePinSent email={email} />
      <CodeSection state={state} setState={setState} error={codeError} />
    </InputsSectionWrapper>
  )
}

export const NameSection = ({ name, setName, lastName, setLastName, birth, setBirth, nameError, lastNameError, birthError }) => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.signup.firstName')} id="firstName" placeholder={t('pages.signup.firstNamePlaceholder')} state={name} setState={setName} />
      {nameError && <ErrorField message={nameError} />}
      <LabeledInput label={t('pages.signup.lastName')} id="lastName" placeholder={t('pages.signup.lastNamePlaceholder')} state={lastName} setState={setLastName} />
      {lastNameError && <ErrorField message={lastNameError} />}
      <LabeledDateInput label={t('pages.signup.birthdate')} id="birthdate" placeholder={t('pages.signup.birthdatePlaceholder')} state={birth} setState={setBirth} />
      {birthError && <ErrorField message={birthError} />}
    </InputsSectionWrapper>
  )
}

export const BodySection = ({ height, setHeight, weight, setWeight, sex, setSex, errorHeight, errorWeight, errorSex }) => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.signup.height')} id="height" placeholder={'175'} state={height} setState={setHeight} />
      {errorHeight && <ErrorField message={errorHeight} />}
      <LabeledInput label={t('pages.signup.weight')} id="weight" placeholder={'60'} state={weight} setState={setWeight} />
      {errorWeight && <ErrorField message={errorWeight} />}
      <LabeledSelect label={t('pages.signup.sex')} state={sex} setState={setSex} options={sexOptions} />
      {errorSex && <ErrorField message={errorSex} />}
    </InputsSectionWrapper>
  )
}