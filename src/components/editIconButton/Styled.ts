import styled from "styled-components"
import { IconTetriaryButton } from "../buttons"

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const EditButton = styled(IconTetriaryButton)`
  padding: 4px;
  border-radius: 40px;
  border: 2px solid var(--neutral-black, #11100E);
  background: #8C909B;
  &:hover {
    background: #81848D !important
  }
  &:active {
    background: #323233 !important
  }
`