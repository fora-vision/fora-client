import styled from "styled-components";

const Stick = styled.div`
  height: 27px;
  width: 6px;
  border-radius: 4px;
  background: rgba(245, 245, 245, 0.08);
`;

const ActiveStick = styled(Stick)`
  background: #f6d658;
`;

export const LevelStick = ({ active = false }: { active?: Boolean }) =>
  active ? <ActiveStick /> : <Stick />;
