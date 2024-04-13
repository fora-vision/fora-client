import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { PSmall } from '../typographic';

const WeekDays = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 35px;
`;

export const CalendarWeekDays = () => {
  const { t } = useTranslation();
  return (
    <WeekDays>
      <PSmall>{t('calendar.week.monday')}</PSmall>
      <PSmall>{t('calendar.week.tuesday')}</PSmall>
      <PSmall>{t('calendar.week.wednesday')}</PSmall>
      <PSmall>{t('calendar.week.thurstday')}</PSmall>
      <PSmall>{t('calendar.week.friday')}</PSmall>
      <PSmall>{t('calendar.week.saturday')}</PSmall>
      <PSmall>{t('calendar.week.sunday')}</PSmall>
    </WeekDays>
  )
}
