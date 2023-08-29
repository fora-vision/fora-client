import { styled } from "styled-components";

const ButtonPattern = styled.button`
  cursor: pointer;
  font-size: 16px;  
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  width: ${(button) => (button.width ? button.width : "100%")};

  &:disabled {
    cursor: default;
    color: #65656d;
    background: #b8b8b8;
  }
`

export const PrimaryButton = styled(ButtonPattern)`
  background: #F6D658;
  box-shadow: 0px 6px 24px 2px rgba(246, 214, 88, 0.12);
  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), #F6D658;
  }
  &:active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), #F6D658;
  }
`

export const IconButton = styled(PrimaryButton)`
  width: 72px;
  height: 72px;
  padding: 12px;
  gap: 8px;
  border-radius: 40px;
`

export const SecondaryButton = styled(ButtonPattern)`
  background: #1D1D1D;
  color: #FFF;
  padding: 18px 38px;
  gap: 10px;
  border: 1px solid rgba(255, 255, 255, 0.03);
  &:hover {
    background: rgba(245, 245, 245, 0.20);
  }
  &:active {
    background: rgba(245, 245, 245, 0.20);
    color: rgba(245, 245, 245, 0.20);
  }
`

export const TetriaryButton = styled(ButtonPattern)`
  width: auto;
  color: #FFF;
  font-weight: 400;
  background: rgba(245, 245, 245, 0.04);
  padding: 6px 16px;
  gap: 2px;
  background: rgba(245, 245, 245, 0.04);
  &:hover {
    background: rgba(245, 245, 245, 0.20);
  }
  &:active {
    background: rgba(255, 255, 255, 0.10);
  }
`

export const LoginViaButton = styled(ButtonPattern)`
  background: #F5F5F5;
  height: 56px;
  gap: 8px;
`

export const LogOutButton = styled(ButtonPattern)`
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: #252525;
  box-shadow: 0px -8px 32px 0px rgba(255, 255, 255, 0.10);
  padding: 8px 16px;
  gap: 16px;
  color: #D06060;
` 