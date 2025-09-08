import styled from "styled-components"
import { ISet } from "../../../interfaces/ICourse"
import { P, YellowBoldP } from "../../typographic"
import { GrayLine } from "../../lines"
import { SetExercises } from "./SetExercises"
import { useTranslation } from "react-i18next"

const SetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

const SetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Set = ({ set, setsLength, index }: { set: ISet, setsLength: number, index: number }) => {
  const { t } = useTranslation()
  const exercises = set.exercises;
  return (
    <>
      <SetWrapper>
        <SetHeader>
          <YellowBoldP>{set.name}</YellowBoldP>
          {set.time && <P transparent={0.75}>{set.time} {t('pages.course.minutes')}</P>}
        </SetHeader>
        {exercises && <SetExercises exercises={exercises} />}
      </SetWrapper>
      {setsLength - index !== 1 && <GrayLine />}
    </>
  )
}
