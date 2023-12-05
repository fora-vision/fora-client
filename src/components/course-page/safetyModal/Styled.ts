import styled from 'styled-components'

export const JoinModal = styled.div`
  display: flex;
  width: 664px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid rgba(245, 245, 245, 0.04);
  background: #262423;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(17, 16, 14, 0.75);
  z-index: 5;
`

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end; 
`

export const ButtonConteiner = styled.div`
  width: 300px;
  @media(max-width: 1000px) {
    width: 100%;
  }
`

export const TextWrapper = styled.div`
  height: 391px;
  margin: 16px 0;
  overflow-y: scroll;
`

export const ProcessingPersonalData = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`

export const List = styled.ul`
  padding-right: 8px;
  margin-bottom: 8px;
`
