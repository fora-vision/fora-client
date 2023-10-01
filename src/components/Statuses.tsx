import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ReactComponent as CheckIcon } from "../images/statuses-icons/check-icon.svg";
import { ReactComponent as ClockIcon } from "../images/statuses-icons/clock.svg";
import { ReactComponent as WarningIcon } from "../images/statuses-icons/warning.svg";
import { ReactComponent as GrayClockIcon } from "../images/statuses-icons/clock-gray.svg";
import { BoldBlackPSmall, BoldPSmall, PSmall } from "./typographic";

export const StatusWrapper = styled.div`
    border-radius: 40px;
    display: inline-flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
`
const SuccessWrapper = styled(StatusWrapper)`
    border: 1px solid #5FB768;
    background: #487048;
`
const ProgressWrapper = styled(StatusWrapper)`
    background: #F6D658;
`
const ExpiredWrapper = styled(StatusWrapper)`
    border: 1px solid #C84848;
    background: #623434;
`
const UnavailableWrapper = styled(StatusWrapper)`
    border: 1px solid rgba(245, 245, 245, 0.04);
    background: rgba(245, 245, 245, 0.20);
`
export const SuccessStatus = ({ days }: { days: number }) => {
    const { t } = useTranslation();
    return <SuccessWrapper>
        <CheckIcon />
        <BoldPSmall>{t('statuses.finished')}</BoldPSmall><PSmall>{t('statuses.finishedForDays', { days: days })}</PSmall>
    </SuccessWrapper>
}

export const InProgressStatus = () => {
    const { t } = useTranslation();
    return <ProgressWrapper>
        <ClockIcon />
        <BoldBlackPSmall>{t('statuses.inProgress')}</BoldBlackPSmall>
    </ProgressWrapper>
}

export const ExpiredStatus = () => {
    const { t } = useTranslation();
    return <ExpiredWrapper>
        <WarningIcon />
        <BoldPSmall>{t('statuses.expired')}</BoldPSmall>
    </ExpiredWrapper>
}

export const UnavailableStatus = () => {
    const { t } = useTranslation();
    return <UnavailableWrapper>
        <GrayClockIcon />
        <BoldPSmall transparent={0.75}>{t('statuses.unavailable')}</BoldPSmall>
    </UnavailableWrapper>
}