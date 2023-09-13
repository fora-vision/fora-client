import React from 'react'
import styled from 'styled-components'
import { PSmall } from '../typographic'

const Wrapper = styled.div`
  padding-top: 8px;
`

export const Description = ({ description }) => {
  return (
    <Wrapper><PSmall transparent={0.65}>{description}</PSmall></Wrapper>
  )
}
