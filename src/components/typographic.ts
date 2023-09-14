import { styled } from "styled-components";
import { IPProps } from "../interfaces/IPProps";

export const H1 = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const H2 = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`

export const H2Regular = styled(H2)`
  text-transform: none;
`

export const P = styled.p.withConfig({
  shouldForwardProp: (prop) => !['transparent'].includes(prop)
}) <IPProps>`
  font-size: 16px;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : 400)};
  line-height: 145%;
  opacity: ${(p) => (p.transparent ? p.transparent : 1)};
`;

export const PSmall = styled(P)`
  font-size: 14px;
`

export const YellowA = styled.a`
  color: #F6D658;
`