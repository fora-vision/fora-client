import { styled } from "styled-components";

export const PureWrapper = styled.div`
  padding: 24px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
`

export const LogInWrapper = styled(PureWrapper)`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 418px;
  margin: 0 auto;
`