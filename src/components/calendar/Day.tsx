import styled from "styled-components";
import { IDay } from "../../interfaces/calendar/IDayProps";

export const Day = styled.div.attrs<IDay>(() => ({})).withConfig({ shouldForwardProp: (prop) => !['isToday'].includes(prop) })`
  position: relative; 
  text-align: center;
  width: 21px;
  opacity: ${({ isToday }) => (isToday ? '1' : '0.5')};
  color: ${({ isToday }) => (isToday ? '#11100E' : 'inherit')};
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: ${({ isToday }) => (isToday ? '""' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 36px;
    height: 36px;
    background-color: #F6D658;
    z-index: -1;
    border-radius: 4px;
  }
`;

export const OutsideMonthDay = styled(Day) <IDay>`
  opacity: 0.2;
`;
