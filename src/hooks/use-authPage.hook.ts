import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useToggle } from './use-toggle.hook';
import { validateEmail } from '../utils/validation-utils';
import { sendEmail } from '../utils/API/auth/api-auth';

export const useAuthPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('')
  const [isEmailSent, toggleIsEmailSent] = useToggle()
  const [isSending, toggleSending] = useToggle()

  const handleEmail = async () => {
    const isEmailValid = validateEmail(email)
    if (isEmailValid) {
      toggleSending()
      try {
        await sendEmail(email)
        toggleIsEmailSent()
      } catch (error) {
        setEmailError(t('errorMessages.server'))
      }
      toggleSending()
    } else {
      setEmailError(t('errorMessages.email.notValid'))
    }
  }

  return { email, emailError, isEmailSent, isSending, handleEmail, setEmail }
}
