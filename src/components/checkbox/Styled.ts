import styled from 'styled-components';
import { ReactComponent as CheckSvg } from '../../images/check-icon.svg'
import { ReactComponent as CheckBlackSvg } from '../../images/check-balck-icon.svg'

export const Label = styled.label<{ $error: string, $isChecked: boolean }>`
  background: rgba(245, 245, 245, 0.04);
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: ${props => (props.$error ? '1px solid #C84848' : '1px solid rgba(245, 245, 245, 0.04)')};
  cursor: pointer;
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  &:checked + ${Label} {
    background: #F6D658;
    border: 1px solid #303030;
  }
`;

export const CheckIcon = styled(CheckSvg)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  opacity: 0.5;
`

export const CheckBlackIcon = styled(CheckBlackSvg)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

export const CheckWrapper = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
`