import styled from "styled-components"
import { PSmall } from "../../../typographic"
import { PureWrapper } from "../../../wrappers"

export const PreviewText = styled(PSmall)`
  padding-top: 4px;
  opacity: 0.75;
  text-align: right;
`

export const Wrapper = styled(PureWrapper)`
  padding: 16px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`