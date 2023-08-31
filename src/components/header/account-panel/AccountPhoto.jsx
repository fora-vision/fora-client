import React from 'react'
import { styled } from 'styled-components'

const AccountPhotoWrapper = styled.div`
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
`

export const AccountPhoto = ({ photoUrl }) => {
  return (
    <AccountPhotoWrapper>
      <img src={photoUrl} alt="Account" />
    </AccountPhotoWrapper>
  )
}
