import { useTranslation } from "react-i18next"
import { IExpandedCourse } from "../../interfaces/ICourse"
import { P, PSmall } from "../typographic"
import { InfoBlock, TextWithIcon } from "./CoursePreview"
import { ReactComponent as UsersIcon } from "../../images/user-group.svg"

export const CourseUsers = ({ course }: { course: IExpandedCourse }) => {
  const { t } = useTranslation()
  return (
    <InfoBlock>
      <PSmall transparent={0.5}>{t('course.users')}</PSmall>
      <TextWithIcon>
        <UsersIcon />
        <P>{course.users_count}</P>
      </TextWithIcon>
    </InfoBlock>
  )
}
