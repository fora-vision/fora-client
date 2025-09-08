import { EllipseLeft, EllipseRight } from '../../components/ellipses';
import { PageContainer } from '../../components/pageContainer';
import { LogInWrapper } from '../../components/wrappers';
import { WelcomeToHeader } from '../../components/authentication-page/WelcomeToHeader';
import { SignUpSection } from '../../components/authentication-page/SignUpSection';
import { InputsSection } from '../../components/authentication-page/InputsSection';
import { LoginButtonSection } from '../../components/authentication-page/LoginButtonSection';
import { ErrorField } from '../../components/errorField/ErrorField';
import { LoginCodeSection } from '../../components/authentication-page/LoginCodeSection';
import { useAuthPage } from '../../hooks/use-authPage.hook';

export const Authentication = () => {
  const { email, emailError, isEmailSent, isSending, handleEmail, setEmail } = useAuthPage()

  return (
    <PageContainer style={{ paddingTop: '60px' }}>
      <LogInWrapper>
        <WelcomeToHeader />
        {isEmailSent ?
          <LoginCodeSection email={email} />
          :
          <>
            <InputsSection state={email} setState={setEmail} />
            {emailError && <ErrorField message={emailError} />}
            <LoginButtonSection callback={handleEmail} isSending={isSending} />
          </>
        }
        <SignUpSection />
      </LogInWrapper>
      <EllipseLeft />
      <EllipseRight />
    </PageContainer>
  )
}
