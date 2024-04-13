import dayjs from 'dayjs';
import styled from 'styled-components';
import { P } from '../../typographic';
import { Stack } from '../../course-page/safetyModal/Styled';

export type Theme = 'red' | 'green' | 'default';

interface WrapperProps {
  theme: Theme;
}

export interface IEvent {
  startDate: string;
  endDate: string;
  trainingName: string;
  courseName: string;
}

export const Wrapper = styled.div<WrapperProps>(({ theme }) => ({
  width: '169px',
  padding: '10px 12px',
  border: '1px solid',
  borderRadius: '4px',

  borderColor: theme === 'red' ? '#C84848' : theme === 'green' ? '#5FB768' : '#343331',
  backgroundColor: theme === 'red' ? '#623434' : theme === 'green' ? '#487048' : '#2C2B29'
}));

export const CalendarEvent = ({ event, theme }: { event: IEvent, theme: Theme }) => {
  const startDate = dayjs(event.startDate).format('DD/MM');
  const endDate = dayjs(event.endDate).format('DD/MM');

  return (
    <Wrapper theme={theme}>
      <Stack gap='4px'>
        <P font={14}>{startDate} - {endDate}</P>
        <P font={14}>{event.trainingName}</P>
        <P font={14} transparent={0.5}>"{event.courseName}"</P>
      </Stack>
    </Wrapper>
  )
}
