import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { P } from '../typographic';
import { GrayLine } from '../lines';

const OrLineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%
`

export const OrLine = () => {
  const { t } = useTranslation();
  return (
    <OrLineWrapper>
      <GrayLine />
      <P transparent={0.5}>{t('pages.auth.or')}</P>
      <GrayLine />
    </OrLineWrapper>
  )
}
