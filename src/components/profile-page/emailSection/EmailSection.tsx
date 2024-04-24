import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LabeledInput } from '../../labeledInput/LabeledInput'
import { IProfile } from '../../../interfaces/api/IProfile'
import { FormButton, FormWrapper, InputWrapper, ProfileSectionWrapper } from './Styled'
import { EmailModal } from './EmailModal'
import { useToggle } from '../../../hooks/use-toggle.hook'
import { validateEmail } from '../../../utils/validation-utils'

export const EmailSection = ({ profile }: { profile: IProfile }) => {
  const { t } = useTranslation()
  const [isModal, toggleModal] = useToggle()
  const [email, setEmail] = useState(profile.email)
  const [newEmail, setNewEmail] = useState('')

  useEffect(() => {
    setNewEmail(email)
  }, [email])

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
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
