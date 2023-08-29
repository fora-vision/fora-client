import { EllipseLeft, EllipseRight } from '../../components/ellipses';
import { PageContainer } from '../../components/pageContainer';
import { LogInWrapper } from '../../components/wrappers';

import { WelcomeToHeader } from '../../components/authentication-page/WelcomeToHeader';
import { GrayLine } from '../../components/lines';
import { LoginViaSection } from '../../components/authentication-page/LoginViaSection';
import { OrLine } from '../../components/authentication-page/OrLine';
import { ForgotPasswordSection } from '../../components/authentication-page/ForgotPasswordSection';
import { SignUpSection } from '../../components/authentication-page/SignUpSection';
import { InputsSection } from '../../components/authentication-page/InputsSection';
import { LoginButtonSection } from '../../components/authentication-page/LoginButtonSection';

export const Authentication = () => {
  return (
    <PageContainer>
      <LogInWrapper>
        <WelcomeToHeader />
        <GrayLine />
        <LoginViaSection />
        <OrLine />
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
