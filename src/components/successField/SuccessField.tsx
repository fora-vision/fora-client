import styled from 'styled-components'
import { ReactComponent as SuccessIcon } from '../../images/success.svg'
import { PSmall } from '../typographic'

const SuccessWrapper = styled.div`
  color: #5FB768;
  display: flex;
  width: 100%;
  gap: 4px;
`

const IconBox = styled.div`
  width: 16px;
  height: 16px;
`

export const SuccessField = ({ message }: { message: string }) => {
    return (
        <SuccessWrapper>
            <IconBox>
                <SuccessIcon />
            </IconBox>
            <PSmall>
                {message}
            </PSmall>
        </SuccessWrapper>
    )
}
