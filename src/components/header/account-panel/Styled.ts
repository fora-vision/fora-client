import styled from "styled-components";
import { ContextItem } from "../../contextMenu/ContextMenu";
import { ReactComponent as LogoutIcon } from '../../../images/logout-c8.svg'

export const AccountToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const AccountPhotoWrapper = styled.div<{ $expanded?: boolean }>`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  width: ${props => (props.$expanded ? '91px' : '50px')};
  height: ${props => (props.$expanded ? '91px' : '50px')};
`

export const ExpandedAccountPhotoWrapper = styled(AccountPhotoWrapper)`
  width: 91px;
  height: 91px;
`

export const EmptyPhoto = styled.div`
  width: 100%;
  height: 100%;
  background-color: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuPopup = styled.div`
  position: absolute;
  top: 55px;
  right: 3px;
  z-index: 100;
`

export const ContextLogoutItem = styled(ContextItem)`
  color: #C84848
`

export const LogoutWidthIcon = styled(LogoutIcon)`
  width: 24px;
`
