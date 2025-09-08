import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 3px;
`;
const Stick = styled.div`
  height: 20px;
  width: 4px;
  border-radius: 4px;
  background: rgba(245, 245, 245, 0.08);
`;
const EasyStick = styled(Stick)`
  background: #5fb768;
`;
const MediumStick = styled(Stick)`
  background: #f6d658;
`;
const HardStick = styled(Stick)`
  background: #c84848;
`;
export const DifficultLevelSticks = ({ level }: { level: number }) => {
  if (level === 1) {
    return (
      <Wrapper>
        <EasyStick />
        <Stick />
        <Stick />
      </Wrapper>
    );
  }
  if (level === 2) {
    return (
      <Wrapper>
        <MediumStick />
        <MediumStick />
        <Stick />
      </Wrapper>
    );
  }
  if (level === 3) {
    return (
      <Wrapper>
        <HardStick />
        <HardStick />
        <HardStick />
      </Wrapper>
    );
  }
  return <></>;
};
