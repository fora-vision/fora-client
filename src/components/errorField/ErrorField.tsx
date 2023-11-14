import styled from 'styled-components'
import { ReactComponent as WarningIcon } from '../../images/warning.svg'
import { PSmall } from '../typographic'

const ErrorWrapper = styled.div`
  color: #C84848;
  display: flex;
  width: 100%;
  align-items: start;
  gap: 4px;
`

const IconBox = styled.div`
  width: 16px;
  height: 16px;
  padding-top: 2px;
`

export const ErrorField = ({ message }: { message: string }) => {
  return (
    <ErrorWrapper>
      <IconBox>
        <WarningIcon />
      </IconBox>
      <PSmall>
        {message}
      </PSmall>
    </ErrorWrapper>
  )
}
