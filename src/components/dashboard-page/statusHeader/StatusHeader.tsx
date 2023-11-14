import styled from "styled-components"
import { HeaderUser } from "./HeaderUser"
import { HeaderStats } from "./HeaderStats"
import { IStatusHeader } from "../../../interfaces/IStatusHeader"

const Wrapper = styled.div`
  display: flex;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  margin-bottom: 32px;
`

export const StatusHeader = ({ username, level, courses, coursesLoading }: IStatusHeader) => {
  return (
    <Wrapper>
      <HeaderUser username={username} level={level} />
      {!coursesLoading && courses && <HeaderStats courses={courses} />}
    </Wrapper>
  )
}
