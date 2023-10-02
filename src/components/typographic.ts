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

export const BlackH2 = styled(H2)`color: #11100E`

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

export const BlackP = styled(P)`color: #11100E`

export const PSmall = styled(P)`
  font-size: 14px;
`

export const BlackPSmall = styled(PSmall)`color: #11100E`

export const BoldPSmall = styled(PSmall)`
    font-weight: 700;
`

export const BoldBlackPSmall = styled(PSmall)`
    color: #11100E;
    font-weight: 700;
`

export const YellowA = styled.a`
  color: #F6D658;
`

