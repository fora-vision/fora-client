import styled from "styled-components"
import { P } from "../../../../typographic"

export const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  &:hover {
    label {
      border-color: rgba(245, 245, 245, 0.40);
      background: rgba(245, 245, 245, 0.1)
    }
  }
`

export const CustomLabel = styled.label<{ $isDragged: boolean }>`
  cursor: pointer;
  border: 1px dashed rgba(245, 245, 245, 0.20);
  width: 318px;
  padding: 48px 24px;
  background: rgba(245, 245, 245, 0.04);background: ${props => props.$isDragged ? 'rgba(246, 214, 88, 0.5)' : 'rgba(245, 245, 245, 0.04)'};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const LabelText = styled(P)`
  text-align: center;
  z-index: -1;
`

export const LabelButton = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  text-align: center;
  padding: 6px 0;
`

export const ImageInput = styled.input`
  border-radius: 4px;
  width: 100%;
  height: 185px;
  cursor: pointer;
  opacity: 0;
	position: absolute;
  top: 0;
`
