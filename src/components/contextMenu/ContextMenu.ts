import styled from "styled-components"
import { PureWrapper } from "../wrappers"

export const ContextMenu = styled(PureWrapper)`
  width: 300px;
  background: #303030;
  border-color: rgba(245, 245, 245, 0.20);
  padding: 8px 0px;
`

export const ContextItem = styled.button`
  padding: 12px 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: #F5F5F5;
  &:hover{
    background-color: rgba(245, 245, 245, 0.04);
  }
`
