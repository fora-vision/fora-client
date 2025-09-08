import styled from "styled-components";

const Stick = styled.div`
  height: 12px;
  width: 3px;
  border-radius: 4px;
  background: rgba(245, 245, 245, 0.08);
`;

const ActiveStick = styled(Stick)`
  background: rgba(245, 245, 245, 0.75);
`;

export const UserLevelStick = ({ active = false }: { active?: Boolean }) =>
  active ? <ActiveStick /> : <Stick />;
