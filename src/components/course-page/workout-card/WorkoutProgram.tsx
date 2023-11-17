import styled from "styled-components"
import { IWorkout } from "../../../interfaces/ICourse"
import { useToggle } from "../../../hooks/use-toggle.hook"
import { P } from "../../typographic"
import { Expand } from "../../expand/Expand"
import { GrayLine } from "../../lines"
import { WorkoutSets } from "./WorkoutSets"
import { useTranslation } from "react-i18next"
import { PureWrapper } from "../../wrappers"

const Wrapper = styled(PureWrapper)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.10);
  cursor: pointer;
`

const SetsWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding-bottom: 8px;
`

const ProgramHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WorkoutProgram = ({ workout }: { workout: IWorkout }) => {
  const { t } = useTranslation()
  const [isOpen, toggleOpen] = useToggle()
  const sets = workout.sets;
  return (
    <Wrapper onClick={toggleOpen}>
      <ProgramHeader>
        <P>{t('pages.course.trainingProgram')}</P>
        <Expand isOpen={isOpen} />
      </ProgramHeader>
      {isOpen &&
        <SetsWrapper>
          <GrayLine />
          <WorkoutSets sets={sets} />
        </SetsWrapper>
      }
    </Wrapper>
  )
}
