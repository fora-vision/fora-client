import styled from "styled-components"
import { H1, P } from "../typographic"
import { CodeSection } from "../codeSection/CodeSection"
import { PrimaryButton, SecondaryButton } from "../buttons"

const JoinModal = styled.div`
  display: flex;
  width: 420px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: #262423;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(17, 16, 14, 0.75);
`

const ModalButtons = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`

export const JoinCourseModal = ({ code, setCode, toggleModal }) => {
  return (
    <ModalWrapper>
      <JoinModal >
        <H1>Присоединиться к курсу</H1>
        <P transparent={0.75}>Пожалуйста, введите код доступа к курсу</P>
        <CodeSection state={code} setState={setCode} />
        <ModalButtons>
          <SecondaryButton onClick={toggleModal}>Отмена</SecondaryButton>
          <PrimaryButton>Продолжить</PrimaryButton>
        </ModalButtons>
      </JoinModal>
    </ModalWrapper>
  )
}
