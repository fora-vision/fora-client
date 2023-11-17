import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LabeledInput } from '../../labeledInput/LabeledInput'
import { IProfile } from '../../../interfaces/api/IProfile'
import { FormButton, FormWrapper, InputWrapper, ProfileSectionWrapper } from './Styled'

export const EmailSection = ({ profile }: { profile: IProfile }) => {
  const { t } = useTranslation()
  const [email, setEmail] = useState(profile.email)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <ProfileSectionWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <LabeledInput label='E-mail' id='email' state={email} setState={setEmail} description={`${t('pages.profile.currentEmail')}: ${profile.email}`} />
        </InputWrapper>
        <FormButton disabled>{t('pages.profile.save')}</FormButton>
      </FormWrapper>
    </ProfileSectionWrapper>
  )
}
