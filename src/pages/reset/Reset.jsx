import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import ReactCodeInput from 'react-code-input'
import { PageContainer } from '../../components/pageContainer'
import { EllipseLeft, EllipseRight } from '../../components/ellipses'
import { LogInWrapper } from '../../components/wrappers'
import { PrimaryButton } from '../../components/buttons'
import { LabeledInput } from '../../components/authentication-page/LabeledInput'
import { ResetHeader } from '../../components/reset-page/ResetHeader'
import { Stepper } from '../../components/stepper/Stepper'


const InputsSectionWrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 16px;
`

const props = {
  inputStyle: {
    border: '1.5px solid rgba(245, 245, 245, 0.04)',
    color: '#F5F5F5',
    fontFamily: 'Gravity',
    width: '55px',
    fontSize: '20px',
    height: '55px',
    borderRadius: '4px',
    backgroundColor: "rgba(245, 245, 245, 0.04)",
    margin: "0 4px",
    textAlign: 'center'
  },
  inputStyleInvalid: {
    color: 'red',
    border: '1px solid red',
    fontFamily: 'Gravity',
    width: '55px',
    fontSize: '20px',
    height: '55px',
    borderRadius: '4px',
    backgroundColor: "rgba(245, 245, 245, 0.04)",
    margin: "0 4px",
    textAlign: 'center'
  }
}

const CodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const WrapperStyle = {
  border: "1px solid green",
  display: "flex",
  flexDirection: "row",
  gap: "8px",
}

const InputStyle = {
  fontFamily: 'Gravity',
  width: '60px',
  fontSize: '14px',
  height: '55px',
  color: '#F5F5F5',
  border: '1.5px solid rgba(245, 245, 245, 0.04)',
  borderRadius: '4px',
  backgroundColor: "rgba(245, 245, 245, 0.04)"
}

export const Reset = () => {
  const { t } = useTranslation();
  const stepNames = [t('stepper.steps.email'), t('stepper.steps.code'), t('stepper.steps.newPassword')]
  const totalSteps = stepNames.length
  return (
    <PageContainer>
      <LogInWrapper>
        <ResetHeader />
        <Stepper totalSteps={totalSteps} activeStep={1} stepNames={stepNames} />
        <InputsSectionWrapper>
          <LabeledInput label={t('pages.reset.email')} id="email" placeholder={t('pages.reset.emailPlaceholder')} />
        </InputsSectionWrapper>
        <PrimaryButton>{t('pages.reset.sendCode')}</PrimaryButton>
        <CodeWrapper>
          <ReactCodeInput type='text' fields={6} {...props} />
        </CodeWrapper>
      </LogInWrapper>
      <EllipseLeft />
      <EllipseRight />
    </PageContainer>
  )
}
