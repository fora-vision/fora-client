import { styled } from 'styled-components';
import { IProgressBar } from '../../interfaces/IProgressBar';

const ProgressBarWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const ProgressLineBack = styled.div`
  border-radius: 4px;
  background: #3C3C3C;
  height: 8px;
`

export const ProgressBar = styled.div.withConfig({
  shouldForwardProp: (prop) => !['transparent'].includes(prop)
}) <IProgressBar>`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  background: ${(prop) => (prop.width === 100 ? '#5FB768' : '#F6D658')};
  height: 8px;
  width: ${(prop) => (prop.width ? prop.width : 0)}%;
  transition: width 0.4s linear;
`;

export const ProgressLine = ({ progress }: { progress: number }) => {
  return <ProgressBarWrapper>
    <ProgressBar width={progress} />
    <ProgressLineBack />
  </ProgressBarWrapper>
}
