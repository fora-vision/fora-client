import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import OTPInput from 'react-otp-input'
import { P } from '../typographic'
import { TetriaryButton } from '../buttons'
import { ReactComponent as PasteIcon } from '../../images/left-icon.svg'
import { OtpCodeInput } from './OtpCodeInput'

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

export const ResetCodeSection = ({ state, setState }) => {
  const { t } = useTranslation();
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
          renderInput={(props) => <OtpCodeInput {...props} />}
          containerStyle={{ gap: '8px' }}
        />
      </CodeWrapper>
      <TetriaryButton>
        <PasteIcon />
        {t('pages.reset.paste')}
      </TetriaryButton>
    </Code>
  )
}
