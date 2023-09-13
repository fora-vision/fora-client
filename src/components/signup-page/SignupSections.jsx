import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useToggle } from '../../hooks/hookToggle'
import { PersonalDataSection } from './PersonalDataSection'
import { LabeledInput } from '../labeledInput/LabeledInput'
import { LabeledSelect } from '../labeledSelect/LabeledSelect'

const InputsSectionWrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const InputEmailSection = ({ state, setState }) => {
  const { t } = useTranslation();
  const [isCheck, toggleCheck] = useToggle()
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.reset.email')} id="email" placeholder={t('pages.reset.emailPlaceholder')} state={state} setState={setState} />
      <PersonalDataSection isCheck={isCheck} toggleCheck={toggleCheck} />
    </InputsSectionWrapper>
  )
}

export const PasswordSection = ({ state, setState }) => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.signup.password')} id="password" placeholder={t('pages.signup.password')} state={state} setState={setState} />
    </InputsSectionWrapper>
  )
}

export const NameSection = ({ name, setName, lastName, setLastName, birth, setBirth }) => {
  const { t } = useTranslation();
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.signup.firstName')} id="firstName" placeholder={t('pages.signup.firstNamePlaceholder')} state={name} setState={setName} />
      <LabeledInput label={t('pages.signup.lastName')} id="lastName" placeholder={t('pages.signup.lastNamePlaceholder')} state={lastName} setState={setLastName} />
      <LabeledInput label={t('pages.signup.birthdate')} id="birthdate" placeholder={t('pages.signup.birthdatePlaceholder')} state={birth} setState={setBirth} />
    </InputsSectionWrapper>
  )
}

export const BodySection = ({ height, setHeight, weight, setWeight, sex, setSex }) => {
  const { t } = useTranslation();
  const sexOptions = [t('components.select.male'), t('components.select.female')]
  return (
    <InputsSectionWrapper>
      <LabeledInput label={t('pages.signup.height')} id="height" placeholder={'175'} state={height} setState={setHeight} />
      <LabeledInput label={t('pages.signup.weight')} id="weight" placeholder={'60'} state={weight} setState={setWeight} />
      <LabeledSelect label={t('pages.signup.sex')} state={sex} setState={setSex} options={sexOptions} />
    </InputsSectionWrapper>
  )
}