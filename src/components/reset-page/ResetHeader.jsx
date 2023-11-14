import { useTranslation } from "react-i18next";
import { styled } from "styled-components"
import { H2, P } from "../typographic"

const ResetHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  alignItems: start;
  width: 100%;
  padding-bottom: 16px;
`

export const ResetHeader = () => {
  const { t } = useTranslation();
  return (
    <ResetHeaderWrapper>
      <H2>{t('pages.reset.forgotPassword')}</H2>
      <P>{t('pages.reset.weWillSendCode')}</P>
    </ResetHeaderWrapper>
  )
}
