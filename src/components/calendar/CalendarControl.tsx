import styled from "styled-components"
import { H2, PSmall } from "../typographic"
import { IconTetriaryButton } from "../buttons"
import { ReactComponent as LeftArrowIcon } from "../../images/arrow-left.svg"
import { ReactComponent as RightArrowIcon } from "../../images/arrow-right.svg"
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
const ControlButtons = styled.div`
  display: flex;
  gap: 8px;
`

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

export const CalendarControl = ({ date, cbNextMonth, cbPrevMonth }: { date: any, cbNextMonth: React.MouseEventHandler<HTMLButtonElement>, cbPrevMonth: React.MouseEventHandler<HTMLButtonElement> }) => {
  const { t } = useTranslation();
  const year = date.year();
  const month = date.month();
  const monthName = months[month];

  return (
    <Wrapper>
      <Date>
        <PSmall transparent={0.75}>{year}</PSmall>
        <H2>{t(`calendar.months.${monthName}`)}</H2>
      </Date>
      <ControlButtons>
        <IconTetriaryButton onClick={cbPrevMonth}>
          <LeftArrowIcon />
        </IconTetriaryButton>
        <IconTetriaryButton onClick={cbNextMonth}>
          <RightArrowIcon />
        </IconTetriaryButton>
      </ControlButtons>
    </Wrapper>
  )
}


