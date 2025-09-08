import { styled } from "styled-components";

export const GrayLine = styled.div`
  height: 1px;
  background: rgba(245, 245, 245, 0.20);
  width: 100%;
`

export const DarkGrayLine = styled(GrayLine)`background: rgba(17, 16, 12, 0.25)`

export const VerticalGrayLine = styled.div`
  width: 1px;
  background: rgba(245, 245, 245, 0.20);
  height: 100%;
  z-index: 0;
`