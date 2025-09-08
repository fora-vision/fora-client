import React from 'react'
import { useTranslation } from 'react-i18next'
import { H1, P } from '../../typographic'
import { SafetyText } from './SafetyText'
import { PrimaryButton } from '../../buttons'
import { ReactComponent as RightArrowsIcon } from '../../../images/right-icon-black.svg'
import { useToggle } from '../../../hooks/use-toggle.hook'
import { ButtonConteiner, ButtonSection, JoinModal, ModalWrapper, Stack } from './Styled'

export const SafetyModal = ({ link, toggleModal }: { link: string, toggleModal: () => void }) => {
  const { t } = useTranslation()
  const [isCheck, toggleCheck] = useToggle(false)

  const handleWrapperClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    const target = event.target as Element;

    if (target.closest('.modal')) {
      return;
    }
    toggleModal()
  };

  const handleStart = () => {
    window.open(link, '_blank');
    toggleModal()
  }

  return (
    <ModalWrapper onClick={handleWrapperClick}>
      <JoinModal className='modal'>
        <Stack>
          <H1>{t('safety.instruction')}</H1>
          <P transparent={0.75}>{t('safety.pleaseRead')}</P>
          <SafetyText isCheck={isCheck} toggleCheck={toggleCheck} />
          <ButtonSection>
            <ButtonConteiner>
              <PrimaryButton disabled={!isCheck} onClick={handleStart}>
                {t('components.courseCard.startTraining')}
                <RightArrowsIcon />
              </PrimaryButton>
            </ButtonConteiner>
          </ButtonSection>
        </Stack>
      </JoinModal>
    </ModalWrapper>
  )
}
