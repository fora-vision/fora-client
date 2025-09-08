import styled from "styled-components"
import { EllipseLeft } from "../ellipses"
import { PrimaryButton } from "../buttons"

export const Wrapper = styled.div`
  padding: 20px 16px;
  overflow: hidden;
`

export const Content = styled.div`
  padding-top: 24px;
`

export const EllipseMobileLeft = styled(EllipseLeft)`
  top: 250px;
  transform: translate(-110%, 0);
  z-index: -1;
`

export const EllipseMobileRight = styled(EllipseMobileLeft)`
  transform: translate(100%, 0);
  z-index: -1;
`

export const ImageWrapper = styled.div`
position: relative;
width: calc(101% + 30px);
left: -16px;
padding: 24px 0;
`

export const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const TextContent = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding-bottom: 24px;
`

export const HomeButton = styled(PrimaryButton)`
  box-shadow: none;
`