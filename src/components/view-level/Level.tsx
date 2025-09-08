import styled from "styled-components";
import { LevelStick } from "./LevelStick";
import { H2 } from "../typographic";
import { PureWrapper } from "../wrappers";

export const Wrapper = styled(PureWrapper)`
  border-radius: 2px;
  padding: 16px;
  display: flex;
  gap: 4px;
  align-items: center;
`;

const LevelScore = styled(H2)`
  padding-left: 8px;
`;

export const Level = ({ score }: { score: number }) => {
  const exactScore = Math.round(score);
  return (
    <Wrapper>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <LevelStick key={index} active={index < exactScore} />
        ))}
      <LevelScore>{score ? score : "∞"}</LevelScore>
    </Wrapper>
  );
};
