import { EllipseLeft, EllipseRight } from '../../components/ellipses';
import { PageContainer } from '../../components/pageContainer';
import { LogInWrapper } from '../../components/wrappers';

import { WelcomeToHeader } from '../../components/authentication-page/WelcomeToHeader';
import { ForgotPasswordSection } from '../../components/authentication-page/ForgotPasswordSection';
import { SignUpSection } from '../../components/authentication-page/SignUpSection';
import { InputsSection } from '../../components/authentication-page/InputsSection';
import { LoginButtonSection } from '../../components/authentication-page/LoginButtonSection';

export const Authentication = () => {
  return (
    <PageContainer>
      <LogInWrapper>
        <WelcomeToHeader />
        <InputsSection />
        <ForgotPasswordSection />
        <LoginButtonSection />
        <SignUpSection />
      </LogInWrapper>
      <EllipseLeft />
      <EllipseRight />
    </PageContainer>
  )
}
