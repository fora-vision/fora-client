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

  const handleCode = async () => {
    if (code.length === 6) {
      setCodeError(false)
      try {
        const sessionCode = await sendCode(email, code).then(result => {
          return result.session
        })
        // const userInfo = await getUserInfo(sessionCode) ------ Ниже временное решение пока путь апи не работает, потом меняй на это
        const userInfo = { name: '' }
        if (!userInfo.name) {
          navigate('/signup', { state: { step: 2, tempSessionCode: sessionCode } });
        } else {
          sessionStore.setSessionCode(sessionCode)
          window.location.reload();
        }
      } catch (error) {
        setCodeError(t('errorMessages.code.invalid'))
      }
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
      <PrimaryButton onClick={handleCode}>{t('pages.auth.logIn')}</PrimaryButton>
    </Wrapper>
  )
}
