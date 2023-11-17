import styled from "styled-components"
import { PSmall } from "../../../../typographic"
import { TetriaryButton } from "../../../../buttons"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`

export const ImageData = styled.div`
  display: flex;
  flex: 0 0 150px;
  overflow: hidden;
  flex-direction: column;
`

export const ImageName = styled(PSmall)`
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ImageSize = styled(PSmall)`
  font-size: 12px;
  opacity: 0.75
`

export const ChangeButton = styled(TetriaryButton)`
  height: 35px;
  display: flex;
  flex-direction: row;
  gap: 4px;
`

export const ImageInput = styled.input`
  border: 1px dashed red;
  width: 100%;
  height: 100%;
  opacity: 0;
	position: absolute;
  top: 0;
  z-index: 1;
`

export const CustomLabel = styled.label`
  cursor: pointer;
  z-index: 10;
  cursor: pointer;
`

export const CustomChangeButton = styled.div`
  position: relative;
  height: 35px;
`

export const SuccessText = styled(PSmall)`
  color: #5FB768;
`

export const ErrorText = styled(PSmall)`
  color: #C84848;
`

export const StatusSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px; 
  padding-top: 8px;
`

export const ErrorStatusSection = styled(StatusSection)`
  align-items: start;
`
