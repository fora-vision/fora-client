import { styled } from "styled-components";

export const H2 = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`

export const P = styled.p.withConfig({
  shouldForwardProp: (prop) => !['transparent'].includes(prop)
})`
  font-size: 16px;
  font-style: normal;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : 400)};
  line-height: 145%;
  opacity: ${(p) => (p.transparent ? p.transparent : 1)};
`;
