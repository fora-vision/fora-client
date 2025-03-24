import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LabeledInput } from '../../labeledInput/LabeledInput'
import { IProfile } from '../../../interfaces/api/IProfile'
import { FormButton, FormWrapper, InputWrapper, ProfileSectionWrapper } from './Styled'
import { EmailModal } from './EmailModal'
import { useToggle } from '../../../hooks/use-toggle.hook'
import { validateEmail } from '../../../utils/validation-utils'
import { changeEmail } from '../../../utils/API/auth/api-auth'
import { sessionStore } from '../../../store/sessionStore'

export const EmailSection = ({ profile }: { profile: IProfile }) => {
  const { t } = useTranslation()
  const token = sessionStore.getSessionCode()
  const [isModal, toggleModal] = useToggle()
  const [email, setEmail] = useState(profile.email)
  const [newEmail, setNewEmail] = useState('')

  useEffect(() => {
    setNewEmail(email)
  }, [email])

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (token) {
      const response = await changeEmail(newEmail, token)
      console.log(response)
    }
  }

  const isEmailValid = validateEmail(newEmail)
  const isEmailChanged = newEmail !== profile.email
  const isButtonDisabled = !isEmailValid || !isEmailChanged

  return (
    <>
      {isModal && <EmailModal toggleModal={toggleModal} email={newEmail} />}
      <ProfileSectionWrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <InputWrapper>
            <LabeledInput label='E-mail' id='email' state={email} setState={setEmail} description={`${t('pages.profile.currentEmail')}: ${profile.email}`} />
          </InputWrapper>
          <FormButton onClick={toggleModal} disabled={isButtonDisabled}>{t('pages.profile.save')}</FormButton>
        </FormWrapper>
      </ProfileSectionWrapper>
    </>
  )
}
