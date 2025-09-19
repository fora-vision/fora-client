import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { CalendarControl } from "./CalendarControl";
import { GrayLine } from "../lines";
import { P } from "../typographic";
import { Calendar } from "./Calendar";
import { PureWrapper } from "../wrappers";
import { useTranslation } from "react-i18next";

const FutureCalendar = styled(PureWrapper)`
  min-width: 392px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    margin: 0 200px;
  }

  @media (max-width: 900px) {
    display: none;
    margin: 0;
  }
`;

const TodaySection = styled.div`
  padding-top: 8px;
  display: flex;
  align-items: center;
  opacity: 0.5;
  justify-content: space-between;
`;

export const CourseCalendar = ({
  date,
  handleNextMonth,
  handlePrevMonth,
}: {
  date: Dayjs;
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
}) => {
  const today = dayjs().format("DD/MM/YYYY");
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CalendarControl
        date={date}
        cbNextMonth={handleNextMonth}
        cbPrevMonth={handlePrevMonth}
      />
      <FutureCalendar>
        <Calendar
          date={date}
          displayMonth={date.month()}
          displayYear={date.year()}
        />
        <div>
          <GrayLine />
          <TodaySection>
            <P>{t("calendar.today")}</P>
            <P>{today}</P>
          </TodaySection>
        </div>
      </FutureCalendar>
    </Wrapper>
  );
};
