import styled from "styled-components";
import { P } from "../../typographic";
import { PureWrapper } from "../../wrappers";

export const HeaderStatsWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const HeaderUserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const HeaderUsername = styled(P)`
  padding-right: 15px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const StatusHeaderWrapper = styled(PureWrapper)`
  display: flex;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 32px;
`;

export const PhotoWrapper = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
