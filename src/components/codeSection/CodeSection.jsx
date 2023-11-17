import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import OTPInput from 'react-otp-input'
import { P } from '../typographic'
import { TetriaryButton } from '../buttons'
import { ReactComponent as PasteIcon } from '../../images/left-icon.svg'
import { CodeInput } from './CodeInput'
import { ErrorField } from '../errorField/ErrorField'
import { SuccessField } from '../successField/SuccessField'

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
  justify-content: space-between;
`

export const CodeSection = ({ state, setState, error, nums, success }) => {
  const { t } = useTranslation();
  const numInputs = nums || 6
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
          numInputs={numInputs}
          renderInput={(props) => <CodeInput {...props} />}
          containerStyle={{ gap: '8px', justifyContent: 'space-between', width: '100%', alignContent: 'center' }}
        />
      </CodeWrapper>
      {error && <ErrorField message={error} />}
      {success && <SuccessField message={success} />}
      <TetriaryButton onClick={handlePaste}>
        <PasteIcon />
        {t('pages.reset.paste')}
      </TetriaryButton>
    </Code>
  )
}
