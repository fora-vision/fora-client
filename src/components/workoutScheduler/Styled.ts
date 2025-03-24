import styled from "styled-components";
import { PureWrapper } from "../wrappers";

export const Schedule = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 16px;
  max-height: 500px;
  overflow-x: scroll;
  height: 700px;
`

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const WorkoutsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 8px;
  padding-left: 15px;
  height: 100%;
  position: relative;
  height: 150%;
  overflow: hidden
`

export const Dividers = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 82px;
  left: 0;
  gap: 69px;
`

export const WorkoutsItemsWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: column;
  height: 100%;
  top: 0;
`

interface IWorkoutItemProp {
  top: number;
  duration: number;
  width: number;
  number: number;
  selected?: number;
}

export const WorkoutItemWrapper = styled(PureWrapper).withConfig({
  shouldForwardProp: (prop) => !['top', 'duration', 'width', 'number', 'selected'].includes(prop)
}) <IWorkoutItemProp>`
  background-color: #1A1917;
  padding: 10px 12px;
  position: ${({ number }) => `${number > 0 ? 'relative' : 'absolute'}`};
  width: ${({ width }) => `${width}%`};
  top: ${({ top, number }) => `${number ? 0 : `${top * 71}px`}`};
  z-index: 1;
  height: ${({ duration }) => `${duration * 55}px`};
  min-height: 40px;
  transform: translate(${({ selected }) => `-${selected ? selected * 100 : 0}%`}, 0);
  transition: transform 0.4s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const WorkoutNameWrapper = styled.div`
    border-radius: 40px;
    padding: 0 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: 1px solid #2C2B29;
    background: #232220;
`
