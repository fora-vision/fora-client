import { WerePinSentForEmail } from '../../authentication-page/WereCodeSent'
import { CodeSection } from '../../codeSection/CodeSection'
import { SecondaryButton } from '../../buttons'
import { Loader } from '../../loader/Loader'
import { ModalContent, UploadModal } from '../uploadAvatar/Styled'
import { ModalWrapper } from '../../dashboard-page/JoinCourseModal'
import { useChangeEmail } from '../../../hooks/use-changeEmail.hook'
import { CodeWrapper } from './Styled'

export const EmailModal = ({ email, toggleModal }: { email: string, toggleModal: () => void }) => {
  const { t, handleWrapperClick, successMessage, code, setStateToCode, codeError, emailChanged, isCodeSending } = useChangeEmail(toggleModal)

  return (
    <ModalWrapper onClick={handleWrapperClick}>
      <UploadModal className="modal">
        <ModalContent>
          <div>
            <WerePinSentForEmail email={email} />
            <CodeWrapper>
              <CodeSection state={code} setState={setStateToCode} error={codeError} nums={4} success={successMessage} />
            </CodeWrapper>
            {!emailChanged && <SecondaryButton onClick={toggleModal} disabled={isCodeSending}>{isCodeSending ? <Loader /> : t('pages.profile.cancel')}</SecondaryButton>}
            {emailChanged && <SecondaryButton theme={'green'} onClick={toggleModal} disabled={isCodeSending}>{t('pages.profile.ok')}</SecondaryButton>}
          </div>
        </ModalContent>
      </UploadModal>
    </ModalWrapper>
  )
}
