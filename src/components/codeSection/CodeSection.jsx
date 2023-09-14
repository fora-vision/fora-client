import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import OTPInput from 'react-otp-input'
import { P } from '../typographic'
import { TetriaryButton } from '../buttons'
import { ReactComponent as PasteIcon } from '../../images/left-icon.svg'
import { CodeInput } from './CodeInput'

const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`

const CodeLabel = styled.div`
  width: 100%;
`

const CodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-bottom: 4px;
  width: 100%;
`

export const CodeSection = ({ state, setState }) => {
  const { t } = useTranslation();
  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText();
      setState(text);
    } catch { setState('error') }
  }
  return (
    <Code>
      <CodeLabel>
        <P>{t('pages.reset.code')}</P>
      </CodeLabel>
      <CodeWrapper>
        <OTPInput
          value={state}
          onChange={setState}
          numInputs={6}
          renderInput={(props) => <CodeInput {...props} />}
          containerStyle={{ gap: '8px' }}
        />
      </CodeWrapper>
      <TetriaryButton onClick={handlePaste}>
        <PasteIcon />
        {t('pages.reset.paste')}
      </TetriaryButton>
    </Code>
  )
}
