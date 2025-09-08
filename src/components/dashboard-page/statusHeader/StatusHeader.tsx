import { HeaderUser } from "./HeaderUser";
import { HeaderStats } from "./HeaderStats";
import { IStatusHeader } from "../../../interfaces/IStatusHeader";
import { StatusHeaderWrapper } from "./Styled";

export const StatusHeader = ({
  username,
  level,
  courses,
  coursesLoading,
}: IStatusHeader) => {
  return (
    <StatusHeaderWrapper>
      <HeaderUser username={username} level={level} />
      {!coursesLoading && courses && <HeaderStats courses={courses} />}
    </StatusHeaderWrapper>
  );
};
