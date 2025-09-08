import styled from "styled-components";
import { P } from "../typographic";
import { UserLevelStick } from "./UserLevelStick";
import { PureWrapper } from "../wrappers";

export const Wrapper = styled(PureWrapper)`
  border-radius: 2px;
  padding: 6px;
  display: flex;
  gap: 3px;
  align-items: center;
`;

const LevelScore = styled(P)`
  padding-left: 3px;
  line-height: normal;
  font-size: 10px;
`;

export const UserLevel = ({ score }: { score: number }) => {
  const exactScore = Math.round(score);
  return (
    <Wrapper>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <UserLevelStick key={index} active={index < exactScore} />
        ))}
      <LevelScore>{score ? score : "-"}</LevelScore>
    </Wrapper>
  );
};
