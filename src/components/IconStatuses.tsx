import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../images/statuses-icons/check-icon.svg";
import { ReactComponent as ClockIcon } from "../images/statuses-icons/clock.svg";
import { ReactComponent as WarningIcon } from "../images/statuses-icons/warning.svg";
import { ReactComponent as GrayClockIcon } from "../images/statuses-icons/clock-gray.svg";
import { StatusWrapper } from "./Statuses";

export const StatusIconWrapper = styled(StatusWrapper)`
    padding: 0;
    width: 26px;
    height: 26px;
`

const ProgressIconWrapper = styled(StatusIconWrapper)`
    background: #F6D658;
    width: 28px;
    height: 28px;
`;

const UnavailableIconWrapper = styled(StatusIconWrapper)`
    border: 1px solid rgba(245, 245, 245, 0.04);
    background: rgba(245, 245, 245, 0.20); 
`;

const SuccessIconWrapper = styled(StatusIconWrapper)`
    border: 1px solid #5FB768;
    background: #487048;
`;

const ExpiredIconWrapper = styled(StatusIconWrapper)`
    border: 1px solid #C84848;
    background: #623434;
`

const UnavailableIconStatus = () => {
  return <UnavailableIconWrapper>
    <GrayClockIcon />
  </UnavailableIconWrapper>
}

const InProgressIconStatus = () => {
  return <ProgressIconWrapper>
    <ClockIcon />
  </ProgressIconWrapper>
}

const SuccessIconStatus = () => {
  return <SuccessIconWrapper>
    <CheckIcon />
  </SuccessIconWrapper>
}

const ExpiredIconStatus = () => {
  return <ExpiredIconWrapper>
    <WarningIcon />
  </ExpiredIconWrapper>
}


export const getCourseIconStatus = (status: number) => {
  if (status === 0) {
    return <UnavailableIconStatus />
  }
  if (status === 1) {
    return <InProgressIconStatus />
  }
  if (status === 2) {
    return <SuccessIconStatus />
  }
  if (status === 3) {
    return <ExpiredIconStatus />
  }
  return;
}