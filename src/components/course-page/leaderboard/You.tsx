import React from 'react'
import { BlackPSmall } from '../../typographic'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
  display: flex;
  padding: 6px;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  background: #F6D658;
`

const Text = styled(BlackPSmall)`
  font-size: 10px;
  line-height: normal;
  text-transform: uppercase;
`

export const You = () => {
  const { t } = useTranslation()
  return (
    <Wrapper><Text>{t('pages.course.you')}</Text></Wrapper>
  )
}
