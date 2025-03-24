import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useToggle } from './use-toggle.hook';

export const useChangeEmail = (toggleModal: () => void) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [codeError, setCodeError] = useState('')
  const [isCodeSending, toggleCodeSending] = useToggle()
  const [emailChanged, setEmailChanged] = useState(false)

  useEffect(() => {
    if (emailChanged) {
      return;
    }
    if (code.length === 4) {
      setCodeError('')
      toggleCodeSending()
      try {
        setTimeout(() => {
          setSuccessMessage(t('pages.profile.codeSuccess'))
          setEmailChanged(true)
          toggleCodeSending()
        }, 1000)
      } catch (error) {
        setCodeError(t('errorMessages.code.invalid'))
      }
    } else {
      if (code.length > 1) {
        setCodeError(`${t('errorMessages.code.lengthFour')} ${code.length}`)
      } else {
        setCodeError('')
      }
    }
  }, [code, t, toggleCodeSending, emailChanged])

  const handleWrapperClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    const target = event.target as Element;

    if (target.closest('.modal')) {
      return;
    }
    toggleModal()
  };

  const setStateToCode = isCodeSending || emailChanged ? () => { } : setCode

  return { t, handleWrapperClick, successMessage, code, setStateToCode, codeError, emailChanged, isCodeSending }
}
