import { useTranslation } from 'react-i18next'
import logoPath from '../../images/Fora-logo.png'
import { H1, P } from '../../components/typographic'
import SorryMobileImage from '../../images/sorry-mobile-2.png'
import { Wrapper, Content, ImageWrapper, ImageContainer, TextContent, HomeButton, EllipseMobileLeft, EllipseMobileRight } from '../../components/sorry-mobile-page/Styled'

export const SorryMobile = () => {
  const { t } = useTranslation()

  const handleClick = () => {
    window.open("https://fora.vision/", "_blank")
  }

  return (
    <Wrapper>
      <img src={logoPath} alt="Fora" width={'36px'} height={'46px'} />
      <Content>
        <H1>{t('pages.sorry.needBigger')}</H1>
        <ImageWrapper>
          <ImageContainer>
            <img src={SorryMobileImage} alt="sorry" />
          </ImageContainer>
        </ImageWrapper>
        <TextContent>
          <P transparent={0.75}>{t('pages.sorry.foraNotSupport')}</P>
          <P transparent={0.75}>{t('pages.sorry.useLaptop')}</P>
        </TextContent>
        <HomeButton onClick={handleClick}>{t('pages.sorry.home')}</HomeButton>
      </Content>
      <EllipseMobileLeft />
      <EllipseMobileRight />
    </Wrapper>
  )
}
