import { useTranslation } from "react-i18next"
import dayjs from "dayjs"
import { ICourse, IExpandedCourse } from "../../interfaces/ICourse"
import { InfoBlock, TextWithIcon } from "./CoursePreview"
import { P, PSmall } from "../typographic"
import { ReactComponent as CalendarIcon } from "../../images/calendar.svg"

export const CourseDuration = ({ course }: { course: IExpandedCourse | ICourse }) => {
  const { t } = useTranslation();
  const formattedStartDate = dayjs.unix(course.start_date).format('DD/MM');
  const formattedDeadline = dayjs.unix(course.deadline).format('DD/MM');
  return (
    <InfoBlock>
      <PSmall transparent={0.5}>{t('course.duration')}</PSmall>
      <TextWithIcon>
        <CalendarIcon />
        <P>{formattedStartDate} - {formattedDeadline}</P>
      </TextWithIcon>
    </InfoBlock>
  )
}
