import styled from "styled-components";
import { PureWrapper } from "../wrappers";

export const Schedule = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 32px;
  max-height: 500px;
  overflow: scroll;
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
  height: 100%;
  position: relative;
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
}

export const WorkoutItemWrapper = styled(PureWrapper).withConfig({
  shouldForwardProp: (prop) => !['top', 'duration'].includes(prop)
}) <IWorkoutItemProp>`
  padding: 12px;
  position: absolute;
  width: 93%;
  top: ${({ top }) => `${top * 71}px`};
  z-index: 10000000;
  height: ${({ duration }) => `${duration * 50}px`};
`
