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

export const Authentication = () => {
  const [email, setEmail] = useState('');

  const [isEmailSent, toggleIsEmailSent] = useToggle()

  const handleEmail = () => { // здесь мы отправляем имейл на апи - если все окей - toggleIsEmailSent()
    if (email) {
      toggleIsEmailSent()
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
