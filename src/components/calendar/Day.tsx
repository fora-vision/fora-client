import styled from "styled-components";
import { IDay } from "../../interfaces/calendar/IDayProps";
import { Stack } from "../course-page/safetyModal/Styled";

export const Day = styled.div.attrs<IDay>(() => ({})).withConfig({ shouldForwardProp: (prop) => !['isToday'].includes(prop) })`
  position: relative; 
  text-align: center;
  cursor: default;
  width: 41px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isToday }) => (isToday ? '#11100E' : '#888887')};
  
  &::after {
    content: ${({ isToday }) => (isToday ? '""' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 42px;
    height: 42px;
    background-color: #F6D658;
    z-index: -1;
    border-radius: 6px;
  }
  
  &:hover{
    color: white;
    &::after {
      content: "";
      background-color: ${({ isToday }) => (isToday ? '#F6D658' : '#464543')};
    }
  }
`;

export const OutsideMonthDay = styled(Day) <IDay>`
  opacity: 0.2;
`;


export const DayDots = styled('div')({
  zIndex: '-1',
  display: 'flex',
  top: '33px',
  position: 'absolute',
  gap: '2px',
  flexDirection: 'row',
  width: '100%',
  alignContent: 'center',
  justifyContent: 'center',
})

export const Dot = styled('div')({
  width: '5px',
  height: '5px',
  backgroundColor: "#F6D658",
  borderRadius: '50%'
})