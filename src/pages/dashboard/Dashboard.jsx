import { styled } from 'styled-components'
import { PageContainer } from '../../components/pageContainer'
import { AccountPhoto } from '../../components/header/account-panel/AccountPhoto'
import { H1, H2Regular, P } from '../../components/typographic'
import { PrimaryButton, SecondaryButton } from '../../components/buttons'
import { ReactComponent as RunningManIllustration } from '../../images/illustrations/man-running.svg'
import { useToggle } from '../../hooks/hookToggle'
import { CodeSection } from '../../components/codeSection/CodeSection'
import { useState } from 'react'

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatusHeader = styled.div`
  display: flex;
  width: 1360px;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);
  margin-bottom: 32px;
`

const FutureCalendar = styled.div`
  min-width: 432px;
  height: 564px;
  border-radius: 4px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: rgba(245, 245, 245, 0.04);  
`

const YourCoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 896px;
`

const CoursesJoin = styled.div`
  margin-top: 16px;
  border-radius: 4px;
  border: 1px dashed rgba(245, 245, 245, 0.20);
  background: rgba(245, 245, 245, 0.04);
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IllustrationSection = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

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

export const Dashboard = () => {
  const [isJoin, toggleJoin] = useToggle()
  const [courseCode, setCourseCode] = useState('')
  const userPhotoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"; // change to import or src when API ready
  return (
    <div>
      <PageContainer>
        <StatusHeader>
          <HeaderUser>
            <AccountPhoto photoUrl={userPhotoUrl} />
            <P>Никита Шевчик</P>
          </HeaderUser>
        </StatusHeader>
        <DashboardWrapper>
          <FutureCalendar />
          <YourCoursesWrapper>
            <H2Regular>Ваши курсы</H2Regular>
            <CoursesJoin>
              <PrimaryButton width={'434px'} onClick={toggleJoin}>Присоединится к курсу </PrimaryButton>
            </CoursesJoin>
            <IllustrationSection>
              <RunningManIllustration />
            </IllustrationSection>
          </YourCoursesWrapper>
        </DashboardWrapper>
      </PageContainer>
      {isJoin && <ModalWrapper>
        <JoinModal >
          <H1>Присоединиться к курсу</H1>
          <P transparent={0.75}>Пожалуйста, введите код доступа к курсу</P>
          <CodeSection state={courseCode} setState={setCourseCode} />
          <ModalButtons>
            <SecondaryButton onClick={toggleJoin}>Отмена</SecondaryButton>
            <PrimaryButton>Продолжить</PrimaryButton>
          </ModalButtons>
        </JoinModal>
      </ModalWrapper>}
    </div>
  )
}
