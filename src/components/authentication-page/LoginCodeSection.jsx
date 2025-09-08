import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { WerePinSent } from './WereCodeSent'
import { CodeSection } from '../codeSection/CodeSection'
import { PrimaryButton } from '../buttons'
import { sendCode } from '../../utils/API/auth/api-auth'
import { sessionStore } from '../../store/sessionStore'
import { getUserInfo } from '../../utils/API/user/api-user'
import { useNavigate } from 'react-router-dom'
import { userStore } from '../../store/profileStore.jsx'
import { useToggle } from '../../hooks/use-toggle.hook'
import { Loader } from '../loader/Loader'

const Wrapper = styled.div`
  padding-bottom: 16px;
`

const CodeWrapper = styled.div`
  padding: 32px 0;
`

export const LoginCodeSection = ({ email }) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState(false)
  const [isCodeSending, toggleCodeSending] = useToggle()

  const handleCode = async () => {
    if (code.length === 6) {
      setCodeError(false)
      toggleCodeSending()
      try {
        const sessionCode = await sendCode(email, code).then(result => {
          return result.session
        })
        const userInfo = await getUserInfo(sessionCode)
        if (!userInfo.name) {
          navigate('/signup', { state: { step: 2, tempSessionCode: sessionCode } });
        } else {
          sessionStore.setSessionCode(sessionCode)
          userStore.setUserProfile(userInfo)
          window.location.reload();
        }
      } catch (error) {
        setCodeError(t('errorMessages.code.invalid'))
      }
      toggleCodeSending()
    } else {
      setCodeError(`${t('errorMessages.code.length')} ${code.length}`)
    }
  }

  return (
    <Wrapper>
      <WerePinSent email={email} />
      <CodeWrapper>
        <CodeSection state={code} setState={setCode} error={codeError} />
      </CodeWrapper>
      <PrimaryButton onClick={handleCode} disabled={isCodeSending}>{isCodeSending ? <Loader /> : t('pages.auth.logIn')}</PrimaryButton>
    </Wrapper>
  )
}
