import { useState } from 'react'
import { WerePinSent } from './WereCodeSent'
import { CodeSection } from '../codeSection/CodeSection'
import styled from 'styled-components'
import { PrimaryButton } from '../buttons'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
  padding-bottom: 16px;
`

const CodeWrapper = styled.div`
  padding: 32px 0;
`

export const LoginCodeSection = ({ email }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('')
  return (
    <Wrapper>
      <WerePinSent email={email} />
      <CodeWrapper>
        <CodeSection state={code} setState={setCode} />
      </CodeWrapper>
      <PrimaryButton>{t('pages.auth.logIn')}</PrimaryButton>
    </Wrapper>
  )
}
