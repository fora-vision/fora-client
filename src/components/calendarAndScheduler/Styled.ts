import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 960px) {
    display: none;
  }
`;
