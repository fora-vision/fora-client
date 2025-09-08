import { styled } from "styled-components";

export const EllipsePatter = styled.div`
  width: 603px;
  height: 603px;
  border-radius: 603px;
  opacity: 0.95;
  background: #F6D658;
  filter: blur(150px);
  position: fixed;
  top: 100px;
`

export const EllipseLeft = styled(EllipsePatter)`
  left: 0;
  transform: translate(-100%, 0);
  @media(max-width: 1200px) {
    transform: translate(-150%, 0);
  }
`

export const EllipseRight = styled(EllipsePatter)`
  right: 0;
  transform: translate(100%, 0);
  @media(max-width: 1200px) {
    transform: translate(150%, 0);
  }
`