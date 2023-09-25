import { useState } from 'react';
import { EllipseLeft, EllipseRight } from '../../components/ellipses';
import { PageContainer } from '../../components/pageContainer';
import { LogInWrapper } from '../../components/wrappers';

import { WelcomeToHeader } from '../../components/authentication-page/WelcomeToHeader';
import { SignUpSection } from '../../components/authentication-page/SignUpSection';
import { InputsSection } from '../../components/authentication-page/InputsSection';
import { LoginButtonSection } from '../../components/authentication-page/LoginButtonSection';
import { WeSentCodeSection } from '../../components/authentication-page/WeSentCodeSection';
import { useToggle } from '../../hooks/hookToggle';
import { sendEmail } from '../../utils/API/auth/api-auth';
import { validateEmail } from '../../utils/validation-utils';
import { ErrorField } from '../../components/errorField/ErrorField';
import { useTranslation } from 'react-i18next';

export const Authentication = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [isEmailSent, toggleIsEmailSent] = useToggle()
  const handleEmail = async () => {
    const isEmailValid = validateEmail(email)
    if (isEmailValid) {
      try {
        await sendEmail(email)
        toggleIsEmailSent()
      } catch (error) {
        setEmailError(t('errorMessages.server'))
      }
    } else {
      setEmailError(t('errorMessages.email.notValid'))
    }
  }
  return (
    <PageContainer>
      <LogInWrapper>
        <WelcomeToHeader />
        {isEmailSent ?
          <WeSentCodeSection email={email} />
          :
          <>
            <InputsSection state={email} setState={setEmail} />
            {emailError && <ErrorField message={emailError} />}
            <LoginButtonSection callback={handleEmail} />
          </>
        }
        <SignUpSection />
      </LogInWrapper>
      <EllipseLeft />
      <EllipseRight />
    </PageContainer>
  )
}
