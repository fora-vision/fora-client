import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { CustomLabel, ImageInput, LabelButton, LabelText, Wrapper } from './Styled';

interface IInputWrapper {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputWrapper = ({ handleImageChange }: IInputWrapper) => {
  const { t } = useTranslation()
  const [isDragged, setIsDragged] = useState(false);

  const handleDragEnter = () => { setIsDragged(true) }

  const handleDragLeave = () => { setIsDragged(false) }

  return (
    <Wrapper>
      <ImageInput accept=".png, .jpeg, .jpg, .tiff" id="upload-avatar" type="file" onChange={handleImageChange} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} />
      <CustomLabel htmlFor='upload-avatar' $isDragged={isDragged} >
        <LabelText transparent={0.75}>
          {t('pages.profile.dragPhoto')}
        </LabelText>
        <LabelButton>
          {t('pages.profile.select')}
        </LabelButton>
      </CustomLabel>
    </Wrapper>
  )
}
