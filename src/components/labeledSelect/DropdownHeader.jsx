import styled from "styled-components";

export const DropdownHeader = styled.div`
  cursor: pointer;
  border-radius: 4px;
  border: 1.5px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  display: flex;
  padding: 16px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #F7F7F7;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;  
  &:hover {
    border: 1.5px solid #F7F7F7;
    outline: none;
    background: rgba(255, 255, 255, 0.35);
  }
`;
