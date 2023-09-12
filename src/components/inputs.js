import { styled } from "styled-components";

export const PureInput = styled.input`
  border-radius: 4px;
  border: 1.5px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  display: flex;
  width: ${(input) => (input.width ? input.width : "100%")};
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  color: #F7F7F7;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;  
  &:focus {
    border: 1.5px solid #F7F7F7;
    outline: none;
    background: rgba(255, 255, 255, 0.35);
  }
`

export const PureLabel = styled.label`
  color: #F7F7F7;
  font-size: 16px;
  font-weight: 400;
  line-height: 145%;
  padding-bottom: 8px;
`
